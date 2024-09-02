import { tv } from '$lib/utils/tv';

export const selectVariant = tv({
	slots: {
		label: ['s-ui--select-label', 'font-medium text-neutral-600 dark:text-neutral-200'],
		base: [
			's-ui--base-label',
			'relative border mt-1 bg-white',
			'dark:bg-neutral-700 dark:border dark:border-neutral-800 dark:text-neutral-100'
		],
		trigger: [
			's-ui--select-trigger',
			'w-full flex px-4 py-2 justify-between items-center',
			'hover:bg-neutral-100',
			'dark:hover:bg-neutral-600'
		],
		placeholderWrapper: ['s-ui--select-placeholderWrapper', 'w-full truncate flex items-start'],
		placeholder: ['s-ui--select-placeholder', 'placeholder:text-neutral-500 truncate'],
		listbox: [
			's-ui--select-listbox',
			'z-10 absolute overflow-auto max-h-40 min-w-[160px] mt-1 w-full origin-top border rounded-lg',
			'dark:border-none'
		],
		option: [
			's-ui--select-option',
			'items-center px-4 py-2 justify-between gap-1 items-center border border-transparent bg-white',
			'hover:bg-gray-100',
			'dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600'
		],
		optionTextWrapper: ['s-ui--select-optionTextWrapper', 'w-full truncate flex items-start'],
		optionText: ['s-ui--select-optionText', 'truncate'],
		invalidText: ['s-ui--select-invalid', 'text-sm text-red-500 mt-1']
	},
	variants: {
		variant: {
			primary: { trigger: 'focus-visible:outline-blue-500' },
			secondary: { trigger: 'focus-visible:outline-gray-500' },
			danger: { trigger: 'focus-visible:outline-red-500' },
			warning: { trigger: 'focus-visible:outline-yellow-500' },
			success: { trigger: 'focus-visible:outline-green-500' }
		},
		size: {
			sm: { label: ['text-xs'], trigger: ['h-8'], placeholder: ['text-sm'], option: ['text-sm'] },
			md: { label: ['text-sm'], trigger: ['h-10'], placeholder: ['text-sm'], option: ['text-sm'] },
			lg: {
				label: ['text-base'],
				trigger: ['h-12'],
				placeholder: ['text-base'],
				option: ['text-base']
			}
		},
		rounded: {
			none: { base: 'rounded-none', trigger: 'rounded-none' },
			sm: { base: 'rounded-sm', trigger: 'rounded-sm' },
			md: { base: 'rounded-md', trigger: 'rounded-md' },
			lg: { base: 'rounded-lg', trigger: 'rounded-lg' },
			full: { base: 'rounded-full', trigger: 'rounded-full' }
		},
		open: {
			true: { listbox: 'scale-y-1 shadow-lg', option: 'flex' },
			false: { listbox: 'scale-y-0 opacity-0', option: 'none' }
		},
		readonly: {
			true: { option: ['cursor-not-allowed text-gray-500'] },
			false: { option: 'cursor-pointer' }
		},
		disabled: {
			true: {
				trigger: [
					'cursor-not-allowed text-neutral-500 bg-gray-100',
					'dark:text-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-600'
				]
			},
			false: { trigger: 'cursor-pointer' }
		},
		animation: {
			true: {
				trigger: ['transition-all duration-200'],
				option: ['transition-all duration-200'],
				listbox: ['transition-all duration-200']
			},
			false: { listbox: '' }
		},
		invalid: {
			true: {
				label: ['text-red-500 dark:text-red-500'],
				base: ['border-red-500 dark:border-red-500'],
				trigger: ['outline-none']
			},
			false: {}
		}
	}
});

export type SelectSlots = keyof ReturnType<typeof selectVariant>;
