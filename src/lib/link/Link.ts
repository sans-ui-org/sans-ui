import { cx } from '$lib/utils/utils';
import { type ComponentColorType, type FontSize, type FontWeight } from '../utils/utils';
import { getFontSize, getFontWeight } from '../utils/utils';

export type UnderlineType = 'none' | 'hover' | 'always' | 'active';

export type LinkProps = {
	className?: string;
	disabled?: boolean;
	underlineType?: UnderlineType;
	variant?: ComponentColorType;
	size?: FontSize;
	bold?: FontWeight;
};

export function getLinkSlots({
	className = '',
	disabled = false,
	underlineType = 'always',
	variant = 'primary',
	size = 'md',
	bold = 'medium'
}: LinkProps) {
	function getUnderline() {
		switch (underlineType) {
			case 'none':
				return '';
			case 'hover':
				return 'hover:underline';
			case 'always':
				return 'underline';
			case 'active':
				return 'active:underline';
		}
	}

	function getTypeTextColor() {
		if (disabled) return 'text-gray-500 cursor-not-allowed';
		switch (variant) {
			case 'primary':
				return 'text-blue-500 hover:text-blue-800 cursor-pointer';
			case 'secondary':
				return 'text-neutral-500 hover:text-neutral-800 cursor-pointer';
			case 'success':
				return 'text-green-500 hover:text-green-800 cursor-pointer';
			case 'warning':
				return 'text-yellow-500 hover:text-yellow-800 cursor-pointer';
			case 'danger':
				return 'text-red-500 hover:text-red-800 cursor-pointer';
			case 'indigo':
				return 'text-indigo-500 hover:text-indigo-800 cursor-pointer';
		}
	}
	// classNames
	const linkClassNames = cx([
		'transition',
		'duration-200',
		getUnderline(),
		getTypeTextColor(),
		getFontSize(size),
		getFontWeight(bold),
		className
	]);

	// slots
	return {
		base: linkClassNames
	};
}
