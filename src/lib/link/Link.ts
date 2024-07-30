import { tv } from '$lib/utils/tv';

export const linkVariant = tv({
	slots: {
		base: ['']
	},
	variants: {
		variant: {
			primary: { base: 'text-blue-500 hover:text-blue-600 visited:text-blue-800 cursor-pointer' },
			secondary: {
				base: 'text-neutral-500 hover:text-neutral-600 visited:text-neutral-800 cursor-pointer'
			},
			success: {
				base: 'text-green-500 hover:text-green-600 visted:text-green-800 cursor-pointer'
			},
			warning: {
				base: 'text-yellow-500 hover:text-yellow-600 visisted:text-yellow-800 cursor-pointer'
			},
			danger: { base: 'text-red-500 hover:text-red-600 visited:text-red-800 cursor-pointer' }
		},
		underlineType: {
			none: '',
			hover: { base: 'hover:underline' },
			always: { base: 'underline' },
			active: { base: 'active:underline' }
		},
		size: {
			xs: { base: 'text-xs' },
			sm: { base: 'text-sm' },
			md: { base: 'text-base' },
			lg: { base: 'text-lg' },
			xl: { base: 'text-xl' },
			'2xl': { base: 'text-2xl' },
			'3xl': { base: 'text-3xl' },
			'4xl': { base: 'text-4xl' },
			'5xl': { base: 'text-5xl' },
			'6xl': { base: 'text-6xl' },
			'7xl': { base: 'text-7xl' },
			'8xl': { base: 'text-8xl' },
			'9xl': { base: 'text-9xl' }
		},
		bold: {
			bold: { base: 'font-bold' },
			thin: { base: 'font-thin' },
			extralight: { base: 'font-extralight' },
			light: { base: 'font-light' },
			normal: { base: 'font-normal' },
			medium: { base: 'font-medium' },
			semibold: { base: 'font-semibold' },
			extrabold: { base: 'font-extrabold' },
			black: { base: 'font-black' }
		},
		disabled: {
			true: { base: 'text-gray-500 cursor-not-allowed' }
		}
	}
});

export type LinkSlots = keyof ReturnType<typeof linkVariant>;
