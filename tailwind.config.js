/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/image-product-1.jpg')"
      },
      maxWidth: {
        'max-w-80': '80%'
      }
    },
  },
  plugins: [],
}
