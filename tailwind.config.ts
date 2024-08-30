import type { Config } from "tailwindcss";
import { colors } from './theme.config';

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic" : "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors,
		},
	},
  daisyui: {
    themes: [
      {
        light: {
          primary   : colors.picton.DEFAULT,
          secondary : colors.chai.DEFAULT,
          accent    : colors.denim.DEFAULT,
          info      : colors.gunmetal.DEFAULT,
          "base-100": colors.white.DEFAULT,
          success   : colors.pistachio.DEFAULT,
          error     : colors.vermillion.DEFAULT,
          black     : colors.black.DEFAULT,
          white     : colors.white.DEFAULT,
          neutral   : colors.neutral.DEFAULT,
        },
      }
    ],
    defaultTheme: "light",
  },
	plugins: [
    require('daisyui')
  ],
};
export default config;
