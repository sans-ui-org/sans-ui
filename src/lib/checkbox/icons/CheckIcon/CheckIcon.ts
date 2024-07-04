import { cx, type ComponentVariant } from '$lib/utils/utils';
import type { CheckboxIconSize } from '$lib/checkbox/icons/InderminateIcon/IndeterminateIcon';

type IndeterminateIconProps = {
	// className: string;
	disabled: boolean;
	size: CheckboxIconSize;
	variant: ComponentVariant;
};

export function getCheckIconSlots({
	// className,
	disabled,
	size,
	variant = 'primary'
}: IndeterminateIconProps) {
	function getSize(size: CheckboxIconSize) {
		switch (size) {
			case 'sm':
				return 'w-5 h-5';
			case 'md':
				return 'w-7 h-7';
			case 'lg':
				return 'w-9 h-9';
		}
	}

	function getCheckBoxTypeStyle(isDisabled: boolean, varaint: ComponentVariant) {
		if (isDisabled) return 'fill-gray-400';
		switch (varaint) {
			case 'primary':
				return 'fill-blue-500';
			case 'secondary':
				return 'fill-neutral-500';
			case 'success':
				return 'fill-green-500';
			case 'warning':
				return 'fill-yellow-500';
			case 'danger':
				return 'fill-red-500';
		}
	}

	// classNames
	const baseClassName = cx([
		'sui--check-icon',
		disabled ? 'cursor-not-allowed' : 'cursor-pointer',
		'hover:bg-gray-100 rounded stroke-neutral-500',
		getSize(size),
		getCheckBoxTypeStyle(disabled, variant)
	]);

	// slots
	return {
		base: baseClassName
	};
}
