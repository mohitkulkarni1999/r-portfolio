/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(from|to|via)-(primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        // Float Talk Theme Colors
        primary: {
          50: '#e8f6f6',  // Light Aqua Background
          100: '#d1eded',
          200: '#a3dbdb',
          300: '#75c9c9',
          400: '#47b7b7',
          500: '#2bb3b1',  // Accent Aqua
          600: '#229090',
          700: '#1a6d6d',
          800: '#135e63',  // Primary Teal
          900: '#0b4a4a',
          950: '#073737',
        },
        secondary: {
          50: '#e6f7fb',
          100: '#cceff7',
          200: '#99dfef',
          300: '#66cfe7',
          400: '#33bfdf',
          500: '#2caadf',  // Sky Blue Accent
          600: '#2388b2',
          700: '#1a6685',
          800: '#007b82',  // Dark Cyan
          900: '#005962',
          950: '#003742',
        },
        accent: {
          50: '#fff4e6',
          100: '#ffe9cc',
          200: '#ffd399',
          300: '#ffbd66',
          400: '#ffa733',
          500: '#ffb347',  // Orange Accent
          600: '#cc8f39',
          700: '#996b2b',
          800: '#66471d',
          900: '#33240f',
          950: '#1a1207',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#f36a6a',  // Red Accent
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#7a7a7a',  // Medium Gray
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#3b3b3b',  // Dark Gray
          950: '#020617',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-professional': 'linear-gradient(135deg, #135e63 0%, #2bb3b1 50%, #2caadf 100%)',
        'gradient-elegant': 'linear-gradient(135deg, #135e63 0%, #007b82 50%, #2bb3b1 100%)',
        'gradient-hero': 'linear-gradient(135deg, #e8f6f6 0%, #ffffff 50%, #e6f7fb 100%)',
        'gradient-dark': 'linear-gradient(135deg, #135e63 0%, #007b82 50%, #073737 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, #135e63 0px, transparent 50%), radial-gradient(at 80% 0%, #2bb3b1 0px, transparent 50%), radial-gradient(at 0% 50%, #2caadf 0px, transparent 50%)',
        'gradient-rainbow': 'linear-gradient(135deg, #135e63 0%, #2bb3b1 25%, #2caadf 50%, #007b82 75%, #ffb347 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ffb347 0%, #2bb3b1 50%, #2caadf 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #135e63 0%, #2bb3b1 50%, #2caadf 100%)',
        'gradient-teal': 'linear-gradient(135deg, #135e63 0%, #2bb3b1 50%, #e8f6f6 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
