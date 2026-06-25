import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        paper: "#f1efe9",
        lilac: "#f19ac0",
        acid: "#d9ff56",
        violet: "#5e24b2",
      },
      boxShadow: {
        card: "0 24px 70px rgba(16,16,16,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
