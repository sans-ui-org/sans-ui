import { tv } from '$lib/utils/tv';

export const checkboxVariant = tv({
	slots: {
		base: [
			'sans-ui--checkbox--base',
			'grid place-content-center appearance-none bg-transparent m-0 border-2 border-solid border-neutral-600 rounded-md cursor-pointer -translate-y-[0.075em]',
			'transition-colors duration-100 ease-out',
			'before:content-[""] before:bg-neutral-100',
			'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
		]
	},
	variants: {
		variant: {
			primary: { base: 'indeterminate:bg-blue-500 checked:bg-blue-500' },
			secondary: {
				base: 'indeterminate:bg-neutral-500 checked:bg-neutral-500'
			},
			success: { base: 'indeterminate:bg-green-500 checked:bg-green-500' },
			warning: {
				base: 'indeterminate:bg-yellow-500 checked:bg-yellow-500'
			},
			danger: { base: 'indeterminate:bg-red-500 checked:bg-red-500' }
		},
		size: {
			sm: { base: 'w-4 h-4 before:w-[10px] before:h-[10px]' },
			md: { base: 'w-5 h-5 before:w-[12px] before:h-[12px]' },
			lg: { base: 'w-6 h-6 before:w-[14px] before:h-[14px]' }
		},
		disabled: {
			true: { base: ['cursor-not-allowed bg-neutral-300 checked:bg-neutral'] },
			false: { base: 'cursor-pointer' }
		},
		checked: {
			true: { base: ['fill-white'] },
			false: { base: ['fill-transparent'] }
		},
		indeterminate: {
			true: { base: [''] },
			false: { base: [''] }
		}
	}
});

export type CheckboxSlots = keyof ReturnType<typeof checkboxVariant>;
