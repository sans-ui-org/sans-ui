import { tv } from '$lib/utils/tv';

export const textareaVariant = tv({
	slots: {
		labelWrapper: [
			'sans-ui--textarea--labelWrapper',
			'flex flex-row items-center justify-between w-full'
		],
		label: ['sans-ui--textarea--label', 'font-medium text-neutral-600 dark:text-neutral-200'],
		base: [
			'sans-ui--textarea--base',
			'font-normal bg-gray-100 border-gray-200 px-3 py-2 mt-2 w-full resize-none border-2',
			'hover:bg-gray-200',
			'focus-visible:bg-gray-100 focus-visible:outline-0',
			'dark:bg-neutral-600 dark:border-neutral-700 dark:text-neutral-100'
		],
		invalidText: ['sans-ui--textarea--invalidText', 'text-red-500 mt-1']
	},
	variants: {
		variant: {
			primary: {
				base: 'focus-visible:border-blue-500 dark:focus-visible:border-blue-500'
			},
			secondary: {
				base: 'focus-visible:border-neutral-500 dark:focus-visible:border-neutral-200'
			},
			success: {
				base: 'focus-visible:border-green-500 dark:focus-visible:border-green-500'
			},
			warning: {
				base: 'focus-visible:border-yellow-500 dark:focus-visible:border-yellow-500'
			},
			danger: {
				base: 'focus-visible:border-red-500 dark:focus-visible:border-red-500'
			}
		},
		size: {
			sm: { labelWrapper: ['text-sm'], base: ['text-sm'], invalidText: ['text-sm'] },
			md: { labelWrapper: ['text-sm'], base: ['text-sm'], invalidText: ['text-sm'] },
			lg: { labelWrapper: ['text-base'], base: ['text-base'], invalidText: ['text-base'] }
		},
		rounded: {
			none: { base: 'rounded-none' },
			sm: { base: 'rounded-sm' },
			md: { base: 'rounded-md' },
			lg: { base: 'rounded-lg' },
			full: { base: 'rounded-2xl' }
		},
		invalid: {
			true: {
				label: 'text-red-500 dark:text-red-500',
				base: [
					'border-red-500 dark:border-red-500',
					'focus-visible:border-red-500 dark:focus-visible:border-red-500'
				]
			}
		},
		animation: {
			true: { base: ['transition-all duration-300 ease-in-out'] }
		},
		disabled: {
			true: { base: ['text-gray-500 cursor-not-allowed'] },
			false: { base: ['text-black cursor-text'] }
		}
	}
});

export type TextareaSlots = keyof ReturnType<typeof textareaVariant>;
