import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3ea6d8', 
        CustomGray: '#3c3c3c',
        customBg:'#414242',
        grey: '#AAAAAA',
        greybg:'#353535',
        line:'#616161',
        shadow:'#565656', 
        bgbg:'#181818',
  
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '530': '505px',  
      },
      width: {
        '1216': '76rem',  
        '50':'61rem',
        '57':'57rem',
        '95':'45rem'
      },
      fontFamily: {
        'roboto':'Roboto',
      },
      boxShadow: {
        'custom': ' -12px 4px 40px -3px rgba(24,24,24,255)', 
      }
    },
  },
  plugins: [nextui()],
};
export default config;


