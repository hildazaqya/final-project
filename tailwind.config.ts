import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#0D1B2A',
        'secondary':'#415A77',
        'accent':'#F0F0F5',
        'marimo':'#3CB371',
        'greyBg':'#262626',
        'blacky':'#1f1717',
        'milky':'#F5F5FA',
      },
      backgroundImage: {
        'heropattern':"url('/roronoa-zoro.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'heroColor': "rgba(0,0,0,.2)",
      },
      height: {
        'buttonplay': "calc(300px/1.98)"
      }
    },
  },
  plugins: [],
};
export default config;
