
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Space Grotesk', 'sans-serif'],
				display: ['Audiowide', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				crypto: {
					'blue': '#00FFFF',   // Neon cyan
					'purple': '#B026FF', // Bright purple
					'pink': '#FF1493',   // Deep pink
					'orange': '#FF8C00', // Dark orange
					'green': '#39FF14',  // Neon green
					'yellow': '#FFFF00', // Bright yellow
					'red': '#FF0000',    // Bright red
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 5px 2px rgba(176, 38, 255, 0.3)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(0, 255, 255, 0.6)' },
				},
				'background-shine': {
					'from': { backgroundPosition: '0 0' },
					'to': { backgroundPosition: '-200% 0' }
				},
				'text-flicker': {
					'0%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #B026FF, 0 0 80px #B026FF, 0 0 90px #B026FF, 0 0 100px #B026FF, 0 0 150px #B026FF' },
					'18%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #B026FF, 0 0 80px #B026FF, 0 0 90px #B026FF, 0 0 100px #B026FF, 0 0 150px #B026FF' },
					'22%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #B026FF, 0 0 80px #B026FF, 0 0 90px #B026FF, 0 0 100px #B026FF, 0 0 150px #B026FF' },
					'25%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #B026FF, 0 0 80px #B026FF, 0 0 90px #B026FF, 0 0 100px #B026FF, 0 0 150px #B026FF' },
					'53%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #B026FF, 0 0 80px #B026FF, 0 0 90px #B026FF, 0 0 100px #B026FF, 0 0 150px #B026FF' },
					'57%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #B026FF, 0 0 80px #B026FF, 0 0 90px #B026FF, 0 0 100px #B026FF, 0 0 150px #B026FF' },
					'100%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #B026FF, 0 0 80px #B026FF, 0 0 90px #B026FF, 0 0 100px #B026FF, 0 0 150px #B026FF' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'glow': 'glow 1.5s ease-in-out infinite',
				'background-shine': 'background-shine 2s linear infinite',
				'text-flicker': 'text-flicker 1.5s infinite alternate'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cyber-grid': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B026FF' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
				'cyber-dots': `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300FFFF' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
