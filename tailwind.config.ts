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
			colors: {
        ...colors.light
      },
		},
	},
  daisyui: {
    themes: [
      {
        light: {
          "primary"  : colors.light.primary.DEFAULT,
          "secondary": colors.light.secondary.DEFAULT,
          "accent"   : colors.light.accent.DEFAULT,
          "info"     : colors.light.info.DEFAULT,
          "back"     : colors.light.white.DEFAULT,
          "success"  : colors.light.success.DEFAULT,
          "error"    : colors.light.error.DEFAULT,
          "black"    : colors.light.black.DEFAULT,
          "white"    : colors.light.white.DEFAULT,
          "neutral"  : colors.light.neutral.DEFAULT,
        }
      },
      {
        dark: {
          "primary"  : colors.dark.primary.DEFAULT,
          "secondary": colors.dark.secondary.DEFAULT,
          "accent"   : colors.dark.accent.DEFAULT,
          "info"     : colors.dark.info.DEFAULT,
          "back"     : colors.dark.neutral.DEFAULT,
          "success"  : colors.dark.success.DEFAULT,
          "error"    : colors.dark.error.DEFAULT,
          "black"    : colors.dark.black.DEFAULT,
          "white"    : colors.dark.white.DEFAULT,
          "neutral"  : colors.dark.neutral.DEFAULT,
        }
      },
    ]
  },
	plugins: [
    require('daisyui')
  ],
};
export default config;