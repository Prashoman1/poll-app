import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  // plugins: [heroui()],
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#ffffff",
            secondary: "#EE457E",
            background: "#efedec"
          },
        },
        dark: {
          colors: {
            primary: "#333333",
            secondary: "#FF2D95",
            background: "#121212"
          },
        },
      },
    }),
  ],
}


// import { nextui } from '@nextui-org/theme'

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-sans)"],
//         mono: ["var(--font-mono)"],
//       },
//     },
//   },
//   darkMode: 'class', 
//   plugins: [
//     nextui({
//       themes: {
//         light: {
//           colors: {
//             primary: "#ffffff",
//             secondary: "#EE457E",
//             background: "#efedec"
//           },
//         },
//         dark: {
//           colors: {
//             primary: "#333333",
//             secondary: "#FF2D95",
//             background: "#121212"
//           },
//         },
//       },
//     }),
//   ],
// }