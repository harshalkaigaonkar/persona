import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-purge': "radial-gradient(100% 100% at 100% 0%, rgba(var(--primary)) 0%, hsla(0, 0%, 100%, 0) 100%)",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'foreground-bg': 'rgb(var(--foreground-bg))',
        'background-start-bg': 'rgb(var(--background-start-bg))',
        'background-end-bg': 'rgb(var(--background-end-bg))',
        'high': 'rgb(var(--text-high))',
        'medium': 'rgb(var(--text-medium))',
        'contrast-1': 'rgb(var(--mono-contrast-1))',
        'contrast-2': 'rgb(var(--mono-contrast-2))',
        'base-1': 'rgb(var(--mono-base-1))',
        'base-2': 'rgb(var(--mono-base-2))',
        'base-3': 'rgb(var(--mono-base-3))',
        'primary': 'rgb(var(--primary))',
      },
      keyframes: {
        //Not a better way to use transition, using headless ui for this.
        enter: {
          '0%': {
            'transform': 'translateY(30px)',
            'opacity': '0'
          },
          '50%': {
            'transform': 'translateY(15px)',
            'opacity': '0.5'
          },
          '100%': {
            'transform': 'translateY(0px)',
            'opacity': '1'
          }
        },
      },
      animation: {
        "enter-div": "enter 0.3s linear",
        "enter-div-del-100": "enter 0.3s linear 0.1s",
        "enter-div-del-200": "enter 0.3s linear 0.2s",
        "enter-div-del-300": "enter 0.3s linear 0.3s",
      }
    },
  },
  plugins: [],
}
export default config
