/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                // The new Light Theme Palette
                primary: "#0ea5e9", // Sky Blue 500 (Vibrant Buttons/Links)
                secondary: "#6366f1", // Indigo 500 (Gradients)
                dark: "#0f172a", // Slate 900 (Main Text - High Contrast)
                light: "#f8fafc", // Slate 50 (Page Background)
                "glass-light": "rgba(255, 255, 255, 0.7)", // Frosted glass for light mode
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Gentle shadow for cards
            }
        },
    },
    plugins: [],
}