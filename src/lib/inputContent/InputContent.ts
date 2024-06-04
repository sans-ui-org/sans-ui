import { cx } from '$lib/utils/utils';

export function getInputContentSlots() {
	return {
		content: cx([
			'absolute h-10 w-10',
			'flex flex-row items-center justify-center',
			'focus:outline-0 focus:border-2'
			// isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
			// getBorderColor()
		])
	};
}
