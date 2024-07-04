import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type TooltipProps = {
	variant: ComponentVariant;
	size: ComponentSize;
	className?: string;
};

export function getTooltipSlots({ variant, size, className = '' }: TooltipProps) {
	// Get the size of the button
	const getFontSize = () => {
		switch (size) {
			case 'sm':
				return 'text-sm';
			case 'md':
				return 'text-base';
			case 'lg':
				return 'text-lg';
		}
	};

	const getTooltipSize = () => {
		switch (size) {
			case 'sm':
				return 'text-sm py-1 px-2';
			case 'md':
				return 'text-base py-2 px-3';
			case 'lg':
				return 'text-lg py-3 px-4';
		}
	};

	// Get the button style
	function getTooltipStyle() {
		switch (variant) {
			case 'primary':
				return 'bg-blue-500 before:border-t-blue-500';
			case 'secondary':
				return 'bg-neutral-500 before:border-t-neutral-500';
			case 'success':
				return 'bg-green-500 before:border-t-green-500';
			case 'warning':
				return 'bg-yellow-500 before:border-t-yellow-500';
			case 'danger':
				return 'bg-red-500 before:border-t-red-500';
		}
	}

	// slots
	return {
		base: cx(['relative flex flex-col gap', className]),
		tooltip: cx([
			'absolute z-1 left-1/2 -top-7 transform -translate-x-1/2 -translate-y-1/2 rounded',
			"before:content=[''] before:absolute before:bottom-[-1rem] before:left-1/2 before:ml-[-10px] before:border-8 before:border-solid before:border-transparent before:border-top-8",
			getTooltipStyle(),
			getTooltipSize()
		]),
		tooltipContent: cx(['text-white', getFontSize()]),
		triggerWrapper: 'bg-transparent border-none cursor-auto'
	};
}
