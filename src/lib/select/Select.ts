import { tv } from '$lib/utils/tv';

export const selectVariant = tv({
	slots: {
		label: ['font-normal'],
		base: ['relative border mt-1'],
		trigger: ['w-full flex px-4 py-2 justify-between items-center bg-white'],
		placeholderWrapper: ['w-full truncate flex items-start'],
		placeholder: ['placeholder:text-neutral-500 truncate'],
		listbox: ['border absolute overflow-auto max-h-40 min-w-[160px] mt-1 w-full origin-top'],
		option: [
			'items-center px-4 py-2 justify-between gap-1 items-center border border-transparent bg-white ',
			'hover:bg-gray-100'
		],
		optionTextWrapper: ['w-full truncate flex items-start'],
		optionText: ['truncate'],
		invalidText: ['text-sm text-red-500 mt-1']
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
			sm: { label: ['text-xs'], trigger: ['h-8'] },
			md: { label: ['text-sm'], trigger: ['h-10'] },
			lg: { label: ['text-base'], trigger: ['h-12'] }
		},
		open: {
			true: { listbox: 'scale-y-1 shadow-lg', option: 'flex' },
			false: { listbox: 'scale-y-0 opacity-0', option: 'none' }
		},
		readonly: {
			true: { option: 'cursor-not-allowed text-gray-500' },
			false: { option: 'cursor-pointer' }
		},
		disabled: {
			true: { trigger: 'cursor-not-allowed text-gray-500 bg-gray-100' },
			false: { trigger: 'cursor-pointer' }
		},
		animation: { true: { listbox: 'transition-all duration-200' }, false: { listbox: '' } },
		invalid: {
			true: { label: ['text-red-500'], base: ['border-red-500'], trigger: 'outline-none' },
			false: {}
		}
	}
});

export type SelectSlots = keyof ReturnType<typeof selectVariant>;
