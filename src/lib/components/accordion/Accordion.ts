import { tv } from '$lib/utils/tv';

// tailwind-variants
export const accordionVariant = tv({
	slots: {
		base: ['w-full flex flex-row items-center justify-between p-4 cursor-pointer']
	},
	variants: {
		size: {
			sm: {
				base: 'text-sm p-2'
			},
			md: {
				base: 'text-base p-4'
			},
			lg: {
				base: 'text-lg p6'
			}
		}
	}
});

export type AccoridonSlots = keyof ReturnType<typeof accordionVariant>;
