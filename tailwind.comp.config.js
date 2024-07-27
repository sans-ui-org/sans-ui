/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/lib/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				spinnerRotation: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				spinnerPulse: {
					'0%': { transform: 'scale(1)' },
					'60%': { transform: 'scale(1)' },
					'80%': { transform: 'scale(1.2)' },
					'100%': { transform: 'scale(1)' }
				},
				spinnerScaleUp: {
					'0%': { transform: 'translate(-50%, -50%) scale(0)' },
					'60%': { transform: 'translate(-50%, -50%) scale(1)' },
					'100%': { transform: 'translate(-50%, -50%) scale(1)' }
				},
				spinnerDotContainer: {
					'100%': { transform: 'rotate(360deg)' }
				},
				spinnerDot: {
					'80%': { transform: 'rotate(360deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				spinnerDotBefore: {
					'50%': { transform: 'scale(0.4)' },
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1)' }
				},
				ripple: {
					from: { transform: 'scale(0)', opacity: 1 },
					to: { transform: 'scale(1)', opacity: 0 }
				}
			}
		}
	},
	plugins: []
};
