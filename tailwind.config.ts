import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],//All files included
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "#EEEEEE",
        dark: "#171717",
        lighter: "#F2F2F2",
        darker: "#0D0D0D",

      },
    },
  },
  plugins: [],
} satisfies Config;
