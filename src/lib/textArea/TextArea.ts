import { tv } from '$lib/utils/tv';

export const textareaVariant = tv({
	slots: {
		labelWrapper: ['flex flex-row items-center justify-between w-full'],
		label: ['font-normal'],
		base: [
			'font-normal bg-gray-100 hover:bg-gray-200 focus-visible:bg-gray-100 border-gray-200 px-3 py-2 mt-2 w-full resize-none border-2 focus-visible:outline-0'
		],
		invalidText: ['text-sm text-red-500 mt-1']
	},
	variants: {
		variant: {
			primary: { base: 'focus-visible:border-blue-500' },
			secondary: { base: 'focus-visible:border-neutral-500' },
			success: { base: 'focus-visible:border-green-500' },
			warning: { base: 'focus-visible:border-yellow-500' },
			danger: { base: 'focus-visible:border-red-500' }
		},
		size: {
			sm: { labelWrapper: ['text-xs'], base: ['text-xs'] },
			md: { labelWrapper: ['text-sm'], base: ['text-sm'] },
			lg: { labelWrapper: ['text-base'], base: ['text-base'] }
		},
		invalid: {
			true: { label: 'text-red-500', base: ['border-red-500', 'focus-visible:border-red-500'] }
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
