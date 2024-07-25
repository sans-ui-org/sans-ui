import { tv } from '$lib/utils/tv';

export const tooltipVariant = tv({
	slots: {
		base: [
			'absolute z-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded w-max',
			"before:content=[''] before:absolute before:bottom-[-1rem] before:left-1/2 before:ml-[-10px] before:border-8 before:border-solid  before:border-top-8",
			// Why is it detached from above? => tailwind-variant does not catch these when it is included in the above array item.
			'before:border-b-transparent before:border-l-transparent before:border-r-transparent'
		],
		triggerWrapper: ['relative bg-transparent border-none cursor-auto'],
		tooltipContent: ['text-white']
	},
	variants: {
		variant: {
			primary: {
				base: ['bg-blue-500 before:border-t-blue-500']
			},
			secondary: {
				base: ['bg-neutral-500 before:border-t-neutral-500']
			},
			success: {
				base: ['bg-green-500 before:border-t-green-500']
			},
			warning: {
				base: ['bg-yellow-500 before:border-t-yellow-500']
			},
			danger: {
				base: ['bg-red-500 before:border-t-red-500']
			}
		},
		size: {
			sm: {
				base: ['py-1 px-2 text-sm -top-[24px]'],
				tooltipContent: ['text-sm']
			},
			md: {
				base: ['py-2 px-3 text-base -top-[32px]'],
				tooltipContent: ['text-base']
			},
			lg: {
				base: ['py-3 px-4 text-lg -top-[40px]'],
				tooltipContent: ['text-lg']
			}
		}
	}
});
