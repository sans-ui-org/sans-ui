import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type ButtonProps = {
	className?: string;
	disabled?: boolean;
	variant: ComponentVariant;
	size: ComponentSize;
};

export function useButton({
	className = '',
	disabled: isDisabled = false,
	variant,
	size
}: ButtonProps) {
	// Get the size of the button
	function getSize() {
		switch (size) {
			// case 'xs':
			// 	return 'text-xs py-1 px-3';
			case 'sm':
				return 'text-sm py-2 px-4';
			case 'md':
				return 'text-md py-2 px-5';
			case 'lg':
				return 'text-lg py-2 px-6';
			// case 'xl':
			// 	return 'text-xl py-2 px-7';
		}
	}

	// Get the button style
	function getButtonStyle() {
		if (isDisabled) return 'bg-gray-400 cursor-not-allowed';
		switch (variant) {
			case 'primary':
				return 'bg-blue-500 hover:bg-blue-400 active:bg-blue-600';
			case 'secondary':
				return 'bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-600';
			case 'success':
				return 'bg-green-500 hover:bg-green-400 active:bg-green-600';
			case 'warning':
				return 'bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600';
			case 'danger':
				return 'bg-red-500 hover:bg-red-400 active:bg-red-600';
		}
	}

	// classNames
	const buttonClassNames = cx([
		'sui-button',
		'relative',
		'rounded-3xl',
		'text-white',
		'outline-offset-4',
		'transition',
		'duration-200',
		getSize(),
		getButtonStyle(),
		className
	]);

	// slots
	const slots = {
		base: buttonClassNames
	};

	return {
		slots
	};
}
