/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    // Book theme
    'bg-amber-50',
    'bg-amber-100',
    'text-stone-800',
    'text-amber-800',
    'border-amber-200',
    'prose-stone',
    // Robot theme
    'bg-gray-900',
    'bg-gray-950',
    'text-green-400',
    'text-amber-400',
    'border-green-800',
    'prose-green',
    // Skull theme
    'bg-black',
    'text-red-500',
    'text-red-700',
    'border-red-900',
    'bg-red-950',
    'prose-red',
    // Cat theme
    'bg-pink-50',
    'bg-pink-100',
    'text-pink-400',
    'text-purple-400',
    'border-pink-200',
    'prose-pink',
  ],
};