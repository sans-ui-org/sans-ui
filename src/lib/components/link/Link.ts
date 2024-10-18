import { tv } from '../../utils/tv';

export const linkVariant = tv({
	slots: {
		base: ['sans-ui--link--base', 'inline-flex flex-row items-center'],
		icon: ['sans-ui--link--icon']
	},
	variants: {
		variant: {
			primary: { base: 'text-blue-500 hover:text-blue-700 cursor-pointer' },
			secondary: {
				base: [
					'text-neutral-500 hover:text-neutral-600 cursor-pointer',
					'dark:text-neutral-100 dark:hover:text-neutral-300'
				]
			},
			success: {
				base: 'text-green-500 hover:text-green-600 cursor-pointer'
			},
			warning: {
				base: 'text-yellow-500 hover:text-yellow-600 cursor-pointer'
			},
			danger: { base: 'text-red-500 hover:text-red-600 cursor-pointer' }
		},
		underlineType: {
			none: '',
			hover: { base: 'hover:underline' },
			always: { base: 'underline' },
			active: { base: 'active:underline' }
		},
		size: {
			sm: { base: 'text-sm gap-1', icon: 'w-3 h-3' },
			md: { base: 'text-base gap-1', icon: 'w-3.5 h-3.5' },
			lg: { base: 'text-lg gap-2', icon: 'w-4 h-4' },
			xl: { base: 'text-xl gap-2', icon: 'w-5 h-5' },
			'2xl': { base: 'text-2xl gap-3', icon: 'w-5 h-5' },
			'3xl': { base: 'text-3xl gap-3', icon: 'w-6 h-6' },
			'4xl': { base: 'text-4xl gap-4', icon: 'w-7 h-7' },
			'5xl': { base: 'text-5xl gap-5', icon: 'w-8 h-8' },
			'6xl': { base: 'text-6xl gap-6', icon: 'w-11 h-11' },
			'7xl': { base: 'text-7xl gap-6', icon: 'w-14 h-14' }
		},
		fontWeight: {
			thin: { base: 'font-thin' },
			extralight: { base: 'font-extralight' },
			light: { base: 'font-light' },
			normal: { base: 'font-normal' },
			medium: { base: 'font-medium' },
			semibold: { base: 'font-semibold' },
			bold: { base: 'font-bold' },
			extrabold: { base: 'font-extrabold' },
			black: { base: 'font-black' }
		},
		disabled: {
			true: { base: 'text-gray-500 hover:text-gray-500 cursor-not-allowed' }
		},
		animation: {
			true: { base: 'transition-all duration-300' }
		}
	}
});

export type LinkSlots = keyof ReturnType<typeof linkVariant>;
