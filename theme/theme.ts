/**
 * Centralized Theme System
 * Single source of truth for all design tokens
 * 
 * All colors are defined here and referenced semantically via Tailwind
 * No hardcoded hex values should appear in components
 */

export const theme = {
  colors: {
    // Primary brand color
    primary: '#203354',
    
    // Supporting tones
    primaryDark: '#16243D',      // Darker blue for heavy sections (hero, footer)
    primaryLight: '#2A3F5F',     // Slightly lighter variant
    
    // Accent color for CTAs and highlights
    accent: '#2F80ED',
    accentHover: '#1E6FD6',      // Darker on hover
    
    // Text colors
    textPrimary: '#0F172A',       // Main text on light backgrounds
    textSecondary: '#475569',     // Secondary text
    textMuted: '#64748B',         // Muted/disabled text
    textInverse: '#FFFFFF',       // Text on dark backgrounds
    
    // Background colors
    bgPrimary: '#FFFFFF',         // Main background (rarely used - prefer surfaces)
    bgSurface: '#F5F7FA',        // Light section background
    bgSurfaceAlt: '#E2E8F0',     // Alternate surface (subtle variation)
    bgDark: '#16243D',           // Dark sections (footer, hero)
    
    // Border and divider colors
    border: '#E2E8F0',           // Standard borders
    borderMuted: '#CBD5E1',      // Subtle borders
    borderDark: '#1E293B',       // Borders on dark backgrounds
    
    // Status colors (use sparingly)
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
  },
  
  spacing: {
    section: {
      py: 'py-28 lg:py-40',      // Standard section padding
      pySmall: 'py-20 lg:py-28', // Smaller section padding
    },
  },
  
  typography: {
    fontFamily: {
      sans: 'var(--font-plus-jakarta)',
    },
    letterSpacing: {
      heading: '0.01em',
      tight: '-0.02em',
    },
  },
  
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    card: 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]',
    cardHover: 'shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]',
  },
} as const

export type Theme = typeof theme
