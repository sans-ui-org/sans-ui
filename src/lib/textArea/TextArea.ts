import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type TextAreaProps = {
	className: string;
	variant: ComponentVariant;
	size: ComponentSize;
	disabled: boolean;
	animation: boolean;
	invalid: boolean;
	invalidText: string;
};

export function getTextAreaSlots({
	className,
	variant,
	size,
	disabled,
	animation,
	invalid,
	invalidText
}: TextAreaProps) {
	const getFontSize = () => {
		switch (size) {
			case 'sm':
				return 'text-xs';
			case 'md':
				return 'text-sm';
			case 'lg':
				return 'text-md';
			default:
				return 'text-sm';
		}
	};

	function getBorderColor() {
		if (invalid) return '';
		switch (variant) {
			case 'primary':
				return 'border-blue-500 focus-visible:border-blue-500';
			case 'secondary':
				return 'border-neutral-500 focus-visible:border-neutral-500';
			case 'success':
				return 'border-green-500 focus-visible:border-green-500';
			case 'warning':
				return 'border-yellow-500 focus-visible:border-yellow-500';
			case 'danger':
				return 'border-red-500 focus-visible:border-danger-500';
		}
	}

	const contentClassName = cx([
		'absolute h-10 w-10',
		'flex flex-row items-center justify-center',
		'focus:outline-0 focus:border-2',
		disabled ? 'cursor-not-allowed' : 'cursor-pointer',
		getBorderColor()
	]);

	return {
		labelWrapper: cx(['flex flex-row items-center justify-between w-full', getFontSize()]),
		label: cx(['font-normal', invalid && invalidText && invalidText !== '' ? 'text-red-500' : '']),
		textArea: cx([
			'font-normal bg-gray-100 hover:bg-gray-200 focus-visible:bg-gray-100 px-3 py-2 w-full resize-none border-2 focus-visible:outline-0',
			invalid ? 'border-red-500 focus-visible:border-red-500' : 'border-transparent',
			animation ? '' : 'border-transparent border-2',
			disabled ? 'cursor-not-allowed' : 'cursor-text',
			disabled ? 'text-gray-500' : 'text-black',
			getBorderColor(),
			getFontSize(),
			className
		]),
		invalidText: 'text-sm text-red-500 mt-1',
		startContent: cx([contentClassName, 'left-0']),
		endContent: cx([contentClassName, 'right-0'])
	};
}
