import { tv } from '$lib/utils/tv';

// tailwind-variants
export const accordionVariant = tv({
	slots: {
		base: ['w-full flex flex-row items-center justify-between p-4 cursor-pointer']
	},
	variants: {
		variant: {
			primary: {
				base: 'bg-blue-100 text-blue-500'
			},
			secondary: {
				base: 'bg-neutral-100 text-neutral-500'
			},
			success: {
				base: 'bg-green-100 text-green-500'
			},
			warning: {
				base: 'bg-yellow-100 text-yellow-500'
			},
			danger: {
				base: 'bg-red-100 text-red-500'
			}
		},
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
