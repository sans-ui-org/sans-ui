import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type InputProps = {
	className: string;
	variant: ComponentVariant;
	size: ComponentSize;
	clearable: boolean;
	disabled: boolean;
	animation: boolean;
	invalid: boolean;
	invalidText: string;
};

export function getInputSlots({
	className,
	variant,
	size,
	clearable,
	disabled,
	animation,
	invalid,
	invalidText
}: InputProps) {
	const getFontSize = () => {
		switch (size) {
			case 'sm':
				return 'text-xs';
			case 'md':
				return 'text-sm';
			case 'lg':
				return 'text-base';
			default:
				return 'text-sm';
		}
	};

	function getBorderColor() {
		if (invalid) return '';
		switch (variant) {
			case 'primary':
				return 'focus-visible:border-blue-500';
			case 'secondary':
				return 'focus-visible:border-neutral-500';
			case 'success':
				return 'focus-visible:border-green-500';
			case 'warning':
				return 'focus-visible:border-yellow-500';
			case 'danger':
				return 'focus-visible:border-red-500';
		}
	}

	function getInputHeight() {
		switch (size) {
			case 'sm':
				return 'h-10';
			case 'md':
				return 'h-12';
			case 'lg':
				return 'h-14';
			default:
				return 'text-sm';
		}
	}

	const contentClassName = cx([
		'absolute h-10 w-10',
		'flex flex-row items-center justify-center',
		clearable ? 'focus:outline-0 focus:border-2' : '',
		disabled ? 'cursor-not-allowed' : 'cursor-pointer',
		invalid ? 'focus-visible:border-red-500' : '',
		getBorderColor()
	]);

	return {
		labelWrapper: cx(['flex flex-row items-center justify-between w-full', getFontSize()]),
		label: cx(['font-normal', invalid && invalidText && invalidText !== '' ? 'text-red-500' : '']),
		inputWrapper: cx([
			'relative font-normal bg-gray-100 mt-2 w-full',
			disabled ? 'cursor-not-allowed' : 'cursor-text',
			disabled ? 'text-gray-500' : 'text-black',
			'flex flex-row items-center'
		]),
		input: cx([
			'font-normal bg-gray-100 w-full pl-3 pr-10 border-gray-200 focus:outline-0 border-2',
			invalid ? 'border-red-500 focus-visible:border-red-500' : '',
			animation ? 'transition-all duration-300 ease-in' : '',
			disabled ? 'cursor-not-allowed' : 'cursor-text',
			disabled ? 'text-gray-500' : 'text-black',
			getInputHeight(),
			getBorderColor(),
			className
		]),
		invalidText: 'text-sm text-red-500 mt-1',
		startContent: cx([contentClassName, 'left-0']),
		endContent: cx([contentClassName, 'right-1'])
	};
}
