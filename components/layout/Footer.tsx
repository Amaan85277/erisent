import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-dark text-text-inverse">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-text-inverse">
              Erisent Electro Controls
            </h3>
            <p className="text-sm text-text-inverse/80 leading-relaxed max-w-sm">
              Designing and manufacturing efficient, safe, and reliable electrical
              control panels for industrial and infrastructure applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-text-inverse">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="text-text-inverse/80 hover:text-text-inverse transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-inverse/80 hover:text-text-inverse transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-text-inverse/80 hover:text-text-inverse transition-colors duration-200">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-inverse/80 hover:text-text-inverse transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-text-inverse">Contact</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-text-inverse/80">+91 9873560046</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-text-inverse/80">sales@erisent.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-text-inverse/80">Workshop / Office Address</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border-dark pt-8 text-center text-sm text-text-inverse/60">
          <p>© {currentYear} Erisent Electro Controls. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
