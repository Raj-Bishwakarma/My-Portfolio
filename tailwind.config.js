// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sucks: 'yellow',
        // Lightness Scale (bws)
        'bws-5' : 'hsla(0, 0%, 5%, 1)',
        'bws-10': 'hsla(0, 0%, 10%, 1)',
        'bws-125': 'hsla(0, 0%, 12.5%, 1)',
        'bws-15': 'hsla(0, 0%, 15%, 1)',
        'bws-175': 'hsla(0, 0%, 17.5%, 1)',
        'bws-20': 'hsla(0, 0%, 20%, 1)',
        'bws-25': 'hsla(0, 0%, 25%, 1)',
        'bws-30': 'hsla(0, 0%, 30%, 1)',
        'bws-35': 'hsla(0, 0%, 35%, 1)',
        'bws-40': 'hsla(0, 0%, 40%, 1)',
        'bws-45': 'hsla(0, 0%, 45%, 1)',
        'bws-50': 'hsla(0, 0%, 50%, 1)',
        'bws-55': 'hsla(0, 0%, 55%, 1)',
        'bws-60': 'hsla(0, 0%, 60%, 1)',
        'bws-65': 'hsla(0, 0%, 65%, 1)',
        'bws-70': 'hsla(0, 0%, 70%, 1)',
        'bws-75': 'hsla(0, 0%, 75%, 1)',
        'bws-80': 'hsla(0, 0%, 80%, 1)',
        'bws-85': 'hsla(0, 0%, 85%, 1)',
        'bws-90': 'hsla(0, 0%, 90%, 1)',
        'bws-95': 'hsla(0, 0%, 95%, 1)',
        // Alpha Scale (as)
        'as-0' : 'hsla(0, 0%, 0%, 0)',
        'as-5' : 'hsla(0, 0%, 0%, 0.05)',
        'as-10': 'hsla(0, 0%, 0%, 0.1)',
        'as-15': 'hsla(0, 0%, 0%, 0.15)',
        'as-20': 'hsla(0, 0%, 0%, 0.2)',
        'as-25': 'hsla(0, 0%, 0%, 0.25)',
        'as-30': 'hsla(0, 0%, 0%, 0.3)',
        'as-35': 'hsla(0, 0%, 0%, 0.35)',
        'as-40': 'hsla(0, 0%, 0%, 0.4)',
        'as-45': 'hsla(0, 0%, 0%, 0.45)',
        'as-50': 'hsla(0, 0%, 0%, 0.5)',
        'as-55': 'hsla(0, 0%, 0%, 0.55)',
        'as-60': 'hsla(0, 0%, 0%, 0.6)',
        'as-65': 'hsla(0, 0%, 0%, 0.65)',
        'as-70': 'hsla(0, 0%, 0%, 0.7)',
        'as-75': 'hsla(0, 0%, 0%, 0.75)',
        'as-80': 'hsla(0, 0%, 0%, 0.8)',
        'as-85': 'hsla(0, 0%, 0%, 0.85)',
        'as-90': 'hsla(0, 0%, 0%, 0.9)',
        'as-95': 'hsla(0, 0%, 0%, 0.95)',
        'as-1' : 'hsla(0, 0%, 0%, 1)',
      },
    },
  },
  plugins: [],
}