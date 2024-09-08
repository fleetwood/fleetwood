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
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		colors: {
    			'glass-start': 'rgba(theme(colors.base-100), 0.2)',
    			'glass-end': 'rgba(theme(colors.base-100), 0.4)',
    			black: {
    				DEFAULT: colors.light.black.DEFAULT,
    				dark: colors.dark.black.DEFAULT
    			},
    			white: {
    				DEFAULT: colors.light.white.DEFAULT,
    				dark: colors.dark.white.DEFAULT
    			},
    			
    	}
    },
	},
  daisyui: {
    themes: [
      {
        light: {
          "base-100": colors.light.base.DEFAULT,
          primary   : colors.light.primary.DEFAULT,
          secondary : colors.light.secondary.DEFAULT,
          accent    : colors.light.accent.DEFAULT,
          success   : colors.light.success.DEFAULT,
          error     : colors.light.error.DEFAULT,
        }
      },
      {
        dark: {
          "base-100": colors.dark.base.DEFAULT,
          primary   : colors.dark.primary.DEFAULT,
          secondary : colors.dark.secondary.DEFAULT,
          accent    : colors.dark.accent.DEFAULT,
          success   : colors.dark.success.DEFAULT,
          error     : colors.dark.error.DEFAULT,
        }
      },
    ]
  },
	plugins: [
    require('daisyui'),
		require("tailwindcss-animate")
	],
};
export default config;
