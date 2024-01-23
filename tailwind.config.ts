import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

function withOpacity(variableName: string) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary":  withOpacity("--color-primary"),
        "color-background": withOpacity("--color-background"),
        "color-text": withOpacity("--color-text"),
      },
      animation: {
        movex: 'movex 3s infinite',
      },
      keyframes: {
        movex: {
          from: {
            left: '0',
            opacity: '0',
          },
          '25%': {
            opacity: '1',
          },
          "50%": {
            left: '100%',
            opacity: '0',
          },
          to: {
            left: '100%',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
          {
            'animation-delay': (value) => {
              return {
                'animation-delay': value,
              }
            },
          },
          {
            values: theme('transitionDelay'),
          }
      )
    }),
  ],
} satisfies Config;
