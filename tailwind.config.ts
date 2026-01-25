import type { Config } from 'tailwindcss'
import { theme } from './theme/theme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './theme/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: theme.colors.primary,
          dark: theme.colors.primaryDark,
          light: theme.colors.primaryLight,
        },
        // Accent colors
        accent: {
          DEFAULT: theme.colors.accent,
          hover: theme.colors.accentHover,
        },
        // Text colors
        text: {
          primary: theme.colors.textPrimary,
          secondary: theme.colors.textSecondary,
          muted: theme.colors.textMuted,
          inverse: theme.colors.textInverse,
        },
        // Background colors
        bg: {
          primary: theme.colors.bgPrimary,
          surface: theme.colors.bgSurface,
          surfaceAlt: theme.colors.bgSurfaceAlt,
          dark: theme.colors.bgDark,
        },
        // Border colors
        border: {
          DEFAULT: theme.colors.border,
          muted: theme.colors.borderMuted,
          dark: theme.colors.borderDark,
        },
        // Status colors
        success: theme.colors.success,
        error: theme.colors.error,
        warning: theme.colors.warning,
      },
      fontFamily: {
        sans: [theme.typography.fontFamily.sans, 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        heading: theme.typography.letterSpacing.heading,
        tight: theme.typography.letterSpacing.tight,
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
