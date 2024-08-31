import { tv } from '$lib/utils/tv';

export const inputVariant = tv({
	slots: {
		base: [
			's-ui--input--base',
			'font-normal bg-gray-100 w-full pl-4 pr-10 border-gray-200 border-2 items-center truncate',
			'focus-visible:outline-0',
			'dark:bg-neutral-600 dark:border-neutral-700 dark:text-neutral-100'
		],
		labelWrapper: [
			's-ui--input--labelWrapper',
			'flex flex-row items-center justify-between w-full font-normal text-neutral-600 dark:text-neutral-200'
		],
		label: ['s-ui--input--label', 'font-medium'],
		inputWrapper: ['s-ui--input--inputWrapper', 'relative mt-2 w-full'],
		startContent: [
			's-ui--input--startContent',
			'absolute h-10 w-10 flex flex-row items-center justify-center top-1 left-0'
		],
		endContent: [
			's-ui--input--endContent',
			'absolute flex flex-row items-center justify-center top-1 right-1',
			'dark:text-neutral-100 text-neutral-700'
		],
		invalid: ['s-ui--input--invalid', 'text-red-500 mt-1']
	},
	variants: {
		variant: {
			primary: {
				base: 'focus-visible:border-blue-500 dark:focus-visible:border-blue-500',
				startContent: 'focus-visible:border-blue-500',
				endContent: 'focus-visible:border-blue-500'
			},
			secondary: {
				base: 'focus-visible:border-neutral-500 dark:focus-visible:border-neutral-200',
				startContent: 'focus-visible:border-neutral-500',
				endContent: 'focus-visible:border-neutral-500'
			},
			success: {
				base: 'focus-visible:border-green-500 dark:focus-visible:border-green-500',
				startContent: 'focus-visible:border-green-500',
				endContent: 'focus-visible:border-green-500'
			},
			warning: {
				base: 'focus-visible:border-yellow-500 dark:focus-visible:border-yellow-500',
				startContent: 'focus-visible:border-yellow-500',
				endContent: 'focus-visible:border-yellow-500'
			},
			danger: {
				base: 'focus-visible:border-red-500 dark:focus-visible:border-red-500',
				startContent: 'focus-visible:border-red-500',
				endContent: 'focus-visible:border-red-500'
			}
		},
		size: {
			sm: {
				labelWrapper: 'text-sm',
				base: 'h-8 text-sm',
				startContent: 'h-10 w-10',
				endContent: 'h-6 w-6',
				invalid: 'text-sm'
			},
			md: {
				labelWrapper: 'text-sm',
				base: 'h-10 text-sm',
				startContent: 'h-10 w-10',
				endContent: 'h-8 w-8',
				invalid: 'text-sm'
			},
			lg: {
				labelWrapper: 'text-base',
				base: 'h-12 text-base',
				startContent: 'h-10 w-10',
				endContent: 'h-10 w-10',
				invalid: 'text-base'
			}
		},
		rounded: {
			none: { base: 'rounded-none' },
			sm: { base: 'rounded-sm' },
			md: { base: 'rounded-md' },
			lg: { base: 'rounded-lg' },
			full: { base: 'rounded-full' }
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
				startContent: 'focus-visible:outline-0 focus-visible:border-2',
				endContent: 'focus-visible:outline-0 focus-visible:border-2'
			},
			false: ''
		}
	}
});

export type InputSlots = keyof ReturnType<typeof inputVariant>;
