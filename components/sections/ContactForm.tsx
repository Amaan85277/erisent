'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      // Initialize EmailJS (replace with your actual service ID, template ID, and public key)
      // These should be set as environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      await emailjs.send(serviceId, templateId, formData, publicKey)

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setErrorMessage(
        'Failed to send message. Please try again or contact us directly via phone or email.'
      )
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary lg:text-4xl">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-text-primary">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-primary-100 bg-primary-50/50 px-5 py-4 text-text-primary placeholder:text-text-muted focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text-primary">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-primary-100 bg-primary-50/50 px-5 py-4 text-text-primary placeholder:text-text-muted focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-text-primary">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-primary-100 bg-primary-50/50 px-5 py-4 text-text-primary placeholder:text-text-muted focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all"
                placeholder="+91 XXX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-text-primary">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-primary-100 bg-primary-50/50 px-5 py-4 text-text-primary placeholder:text-text-muted focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-accent-500 px-8 py-4 font-semibold text-white transition-all hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <span className="inline-flex items-center gap-2">
                    Send Message
                    <Send className="h-5 w-5" />
                  </span>
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="font-medium">{errorMessage || 'An error occurred. Please try again.'}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
