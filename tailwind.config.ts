import type { Config } from 'tailwindcss'

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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'foreground-bg': 'rgb(var(--foreground-bg))',
        'background-start-bg': 'rgb(var(--background-start-bg))',
        'background-end-bg': 'rgb(var(--background-end-bg))',
        'high': 'rgb(var(--text-high))',
        'contrast-1': 'rgb(var(--mono-contrast-1))',
        'contrast-2': 'rgb(var(--mono-contrast-2))',
        'base-1': 'rgb(var(--mono-base-1))',
        'base-2': 'rgb(var(--mono-base-2))',
        'base-3': 'rgb(var(--mono-base-3))',
        'primary': 'rgb(var(--primary))'
      }
    },
  },
  plugins: [],
}
export default config
