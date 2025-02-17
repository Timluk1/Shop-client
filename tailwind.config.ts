import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{ts,tsx,mdx}"
    ],

    theme: {
        extend: {
            colors: {
                golden: {
                    400: "#B88E2F",
                    500: "#9F7726"
                },
                white: {
                    100: "#FFFFFF"
                },
                beige: {
                    400: "#FFF3E3"
                },
                gray: {
                    400: "#F4F5F7",
                    500: "#898989",
                    600: "#666666",
                    700: "#3A3A3A",
                    800: "#333333"
                },
                brown: {
                    400: "#B88E2F",
                    500: "#735717"
                },

                // shadcn ui
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
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
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },

            // fonts
            fontFamily: {
                pop: ["var(--font-poppins)"],
                mont: ["var(--font-montserrat)"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
