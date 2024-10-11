/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Urbanist"', ...defaultTheme.fontFamily.sans],
                raleway: ['"Raleway"'],
            },

            colors: {
                'dark-navy': '#0A192F',
                'light-navy': '#112240',
                'lightest-navy': '#508C9B',
                whiter: '#EEEEEE',
            },
            fontSize: {
                md: ['14px', '22px'],
            },

            transformStyle: {
                '3d': 'preserve-3d',
            },
            backfaceVisibility: {
                hidden: 'hidden',
            },
            rotate: {
                'y-180': 'rotateY(180deg)',
            },
            perspective: {
                DEFAULT: '1000px',
            },
        },
    },
    plugins: [],
};
