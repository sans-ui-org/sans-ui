import { tv } from '$lib/utils/tv';

export const inputVariant = tv({
	slots: {
		base: ['font-normal bg-gray-100 w-full pl-3 pr-10 border-gray-200 focus:outline-0 border-2'],
		labelWrapper: ['flex flex-row items-center justify-between w-full'],
		label: ['font-normal'],
		inputWrapper: ['relative font-normal bg-gray-100 mt-2 w-full'],
		startContent: ['absolute h-10 w-10 flex flex-row items-center justify-center top-1 left-0'],
		endContent: ['absolute h-10 w-10 flex flex-row items-center justify-center top-1 right-1']
	},
	variants: {
		variant: {
			primary: {
				base: 'focus-visible:border-blue-500',
				startContent: 'focus-visible:border-blue-500',
				endContent: 'focus-visible:border-blue-500'
			},
			secondary: {
				base: 'focus-visible:border-neutral-500',
				startContent: 'focus-visible:border-neutral-500',
				endContent: 'focus-visible:border-neutral-500'
			},
			success: {
				base: 'focus-visible:border-green-500',
				startContent: 'focus-visible:border-green-500',
				endContent: 'focus-visible:border-green-500'
			},
			warning: {
				base: 'focus-visible:border-yellow-500',
				startContent: 'focus-visible:border-yellow-500',
				endContent: 'focus-visible:border-yellow-500'
			},
			danger: {
				base: 'focus-visible:border-red-500',
				startContent: 'focus-visible:border-red-500',
				endContent: 'focus-visible:border-red-500'
			}
		},
		size: {
			sm: {
				base: 'h-10'
			},
			md: {
				base: 'h-12'
			},
			lg: {
				base: 'h-14'
			}
		},
		invalid: {
			true: {
				base: 'border-red-500 focus-visible:border-red-500',
				label: 'text-red-500',
				startContent: 'focus-visible:border-red-500',
				endContent: 'focus-visible:border-red-500'
			},
			false: { base: '' }
		},
		animation: { true: { base: 'transition-all duration-300 ease-in' }, false: { base: '' } },
		disabled: {
			true: {
				base: 'cursor-not-allowed text-gray-500',
				inputWrapper: 'cursor-not-allowed bg-gray-500'
			},
			false: { base: 'cursor-text text-black', inputWrapper: 'cursor-text text-black' }
		},
		clearable: {
			true: {
				startContent: 'focus:outline-0 focus:border-2',
				endContent: 'focus:outline-0 focus:border-2'
			},
			false: ''
		}
	}
});
