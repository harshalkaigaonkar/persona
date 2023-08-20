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
        'high': 'rgb(0, 0, 0)',
        'contrast-1': 'rgb(255 255 255 / 0.7)',
        'contrast-2': 'rgb(255 255 255 / 0.2)',
        'base-1': 'rgb(32, 32, 32)',
        'base-2': 'rgb(255 255 255 / 0.3)',
        'base-3': 'rgb(255 255 255 / 0.1)',
        'primary': 'rgb(146, 228, 112)'
      }
    },
  },
  plugins: [],
}
export default config
