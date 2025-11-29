/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // This enables the manual dark mode toggle
    theme: {
        extend: {
            colors: {
                background: {
                    light: '#ffffff',
                    dark: '#000000', // Pitch Black
                    darkGray: '#0a0a0a',
                },
                accent: {
                    gray: '#374151',
                    blue: '#2563eb',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}