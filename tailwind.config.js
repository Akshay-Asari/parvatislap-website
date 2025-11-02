/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Nature-inspired color palette from original HTML
        'forest-green': '#556b2f',
        'sage-green': '#9aad7a',
        'warm-brown': '#8b4513',
        'muted-gray': '#9ca3af',
        'text-dark': '#111827',
        'nature-green': '#6b8e23',
        'earth-brown': '#8b7355',
        'sky-blue': '#87ceeb',
        'whatsapp-green': '#556b2f',
        'olive-green': '#808000',
        'olive-light': '#9aad7a',
        'olive-dark': '#556b2f',
        'neon-green': '#39ff14',
        'dark-forest': '#1B3B2F',
        'dark-emerald': '#0F1F17',
        'rich-green': '#2d5a3d'
      },
      fontFamily: {
        // System font stack for optimal performance and native feel
        'system': [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },
      backdropBlur: {
        // Custom blur for glassmorphism effects
        'xs': '2px'
      },
      maxWidth: {
        // Custom max-width for content containers
        '79rem': '79rem'
      },
      // Custom breakpoint for large displays (2560px)
      screens: {
        '2xl': '1536px',
        '3xl': '2560px'
      }
    }
  },
  plugins: []
}

