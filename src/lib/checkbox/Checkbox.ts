import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type CheckBoxProps = {
	className?: string;
	disabled?: boolean;
	variant: ComponentVariant;
	size: ComponentSize;
	animation?: boolean;
};

export function getCheckBoxSlots({ className = '' }: CheckBoxProps) {
	// classNames
	const baseClassNames = cx([
		'sui-checkbox--wrapper',
		'inline-flex flex-row items-center gap-2',
		className
	]);

	// slots
	return {
		base: baseClassNames
	};
}
