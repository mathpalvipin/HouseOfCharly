export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9f5ef',
          100: '#f3e9da',
          200: '#e3c8a7',
          300: '#d2a975',
          400: '#b37b45',
          500: '#8f5b2f',
          600: '#6f4426',
          700: '#54351f',
          800: '#3f2718',
          900: '#2b1810'
        }
      },
      boxShadow: {
        soft: '0 30px 80px rgba(21, 19, 14, 0.08)'
      }
    }
  },
  plugins: [],
}
