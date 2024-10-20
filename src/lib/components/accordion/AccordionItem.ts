import { tv } from '../../utils/tv';

// tailwind-variant
export const accordionItemVariant = tv({
	slots: {
		base: ['transition duration-200']
	},
	variants: {
		size: {
			sm: { base: 'text-sm' },
			md: { base: 'text-base' },
			lg: { base: 'text-lg' }
		}
	}
});

export type AccordionItemSlots = keyof ReturnType<typeof accordionItemVariant>;
