// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // indispensable
  ],
  theme: {
    extend: {
      keyframes: {
        scrollBinary: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        scrollBinary: 'scrollBinary 18s linear infinite',
      },
    },
  },
  plugins: [],
}
