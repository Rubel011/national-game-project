/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        button: "hsl(var(--button-bg))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--secondary-background))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        gradient: {
          DEFAULT: "hsl(var(--gradiant-color))",
          secondary: "hsl(var(--gradiant-secondary))",
        },
      },
    },
  },
  plugins: [],
};
