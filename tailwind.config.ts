import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { wine: "#6e2437", gold: "#b89555", cream: "#fbf6ec", ink: "#34252a" },
    fontFamily: { display: ["Georgia", "serif"] }
  }},
  plugins: []
};
export default config;
