import type { Config } from 'tailwindcss'

export default {
  content: [],
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: '#00acd0',
          light: '#55acd0',
        },
      },
      fontFamily: {
        display: ['DM Serif Text', 'sans-serif'],
        body: ['Figtree', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
} satisfies Config
