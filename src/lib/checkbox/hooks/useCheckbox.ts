import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type CheckBoxProps = {
	className?: string;
	disabled?: boolean;
	variant: ComponentVariant;
	size: ComponentSize;
	isAnimation?: boolean;
};

export function useCheckBox({
	className = '',
	disabled: isDisabled = false,
	variant,
	size,
	isAnimation
}: CheckBoxProps) {
	// Classnames
	const baseClassNames = cx([
		'sui-checkbox--wrapper',
		'flex flex-row items-center gap-2',
		className
	]);

	// Props
	const indeterminateIconProps = {
		disabled: isDisabled,
		size,
		variant
	};
	const checkIconProps = {
		...indeterminateIconProps,
		isAnimation
	};

	// Slots
	const slots = {
		base: baseClassNames
	};

	return {
		slots,
		indeterminateIconProps,
		checkIconProps
	};
}
