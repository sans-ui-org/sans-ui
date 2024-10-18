import { tv } from '../../utils/tv';

// tailwind-variants
export const accordionVariant = tv({
	slots: {
		base: ['w-full flex flex-row items-center justify-between py-3 px-4 cursor-pointer']
	},
	variants: {
		size: {
			sm: {
				base: 'text-sm'
			},
			md: {
				base: 'text-base'
			},
			lg: {
				base: 'text-lg'
			}
		}
	}
});

export type AccoridonSlots = keyof ReturnType<typeof accordionVariant>;
