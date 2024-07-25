import { tv } from '$lib/utils/tv';

export const checkboxVariant = tv({
	slots: {
		base: ['sui-checkbox--wrapper', 'inline-flex flex-row items-center gap-2'],
		icon: []
	},
	variants: {}
});

export const indeterminateIconVariant = tv({
	slots: {
		base: ['sui--check-icon', 'rounded', 'hover:bg-gray-100']
	},
	variants: {
		variant: {
			primary: { base: 'fill-blue-500' },
			secondary: { base: 'fill-neutral-500' },
			success: { base: 'fill-green-500' },
			warning: { base: 'fill-yellow-500' },
			danger: { base: 'fill-red-500' }
		},
		size: {
			sm: { base: 'w-5 h-5' },
			md: { base: 'w-7 h-7' },
			lg: { base: 'w-9 h-9' }
		},
		disabled: {
			true: { base: 'cursor-not-allowed fill-gray-400' },
			false: { base: 'cursor-pointer' }
		}
	}
});

export const checkIconVariant = tv({
	slots: {
		base: ['sui--check-icon', 'hover:bg-gray-100 rounded stroke-neutral-500']
	},
	variants: {
		variant: {
			primary: { base: 'fill-blue-500' },
			secondary: { base: 'fill-neutral-500' },
			success: { base: 'fill-green-500' },
			warning: { base: 'fill-yellow-500' },
			danger: { base: 'fill-red-500' }
		},
		size: {
			sm: { base: 'w-5 h-5' },
			md: { base: 'w-7 h-7' },
			lg: { base: 'w-9 h-9' }
		},
		disabled: {
			true: { base: 'cursor-not-allowed fill-gray-400' },
			false: { base: 'cursor-pointer' }
		}
	}
});

export type CheckboxSlots = keyof ReturnType<typeof checkboxVariant>;
