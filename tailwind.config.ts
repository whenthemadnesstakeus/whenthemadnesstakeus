import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		container: {
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        text: ['Inter', 'sans-serif']
      },
    }
	},
	plugins: [],
} satisfies Config