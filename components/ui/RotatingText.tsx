'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RotatingTextProps {
  phrases: string[]
  interval?: number
  className?: string
}

export default function RotatingText({
  phrases,
  interval = 3000,
  className = '',
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (phrases.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, interval)

    return () => clearInterval(timer)
  }, [phrases.length, interval])

  if (phrases.length === 0) return null

  return (
    <span
      className={`inline-block relative ${className}`}
      aria-live="polite"
      aria-atomic="true"
      style={{
        // Prevent layout reflow by using fixed line-height
        lineHeight: '1.2em',
        minHeight: '1.2em',
        display: 'inline-block',
      }}
    >
      <span className="sr-only">Current phrase: {phrases[currentIndex]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="inline-block"
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
