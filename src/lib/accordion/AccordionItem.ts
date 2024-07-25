import { tv } from '$lib/utils/tv';

// tailwind-variant
export const accordionItemVariant = tv({
	slots: {
		base: ['transition duration-200']
	},
	variants: {
		variant: {
			primary: { base: 'bg-blue-100 hover:bg-blue-200 text-blue-500' },
			secondary: { base: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-500' },
			success: { base: 'bg-green-100 hover:bg-green-200 text-green-500' },
			warning: { base: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-500' },
			danger: { base: 'bg-red-100 hover:bg-red-200 text-red-500' }
		},
		size: {
			sm: { base: 'text-sm' },
			md: { base: 'text-base' },
			lg: { base: 'text-lg' }
		}
	}
});
