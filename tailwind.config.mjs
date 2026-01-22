/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: theme('colors.gray.800'),
            h1: {
              fontWeight: '800',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h3: {
              fontWeight: '600',
            },
            'a': {
              color: theme('colors.primary.600'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
            'strong': {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
