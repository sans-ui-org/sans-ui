import { cx } from '$lib/utils/utils';
import type { ComponentVariant } from '$lib/utils/utils';

export type UnderlineType = 'none' | 'hover' | 'always' | 'active';

export type FontSize =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';

export type FontWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';

export type LinkProps = {
	className?: string;
	disabled?: boolean;
	underlineType?: UnderlineType;
	variant?: ComponentVariant;
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
	function getFontWeight(bold: FontWeight) {
		switch (bold) {
			case 'bold':
				return 'font-bold';
			case 'thin':
				return 'font-thin';
			case 'extralight':
				return 'font-extralight';
			case 'light':
				return 'font-light';
			case 'normal':
				return 'font-normal';
			case 'medium':
				return 'font-medium';
			case 'semibold':
				return 'font-semibold';
			case 'extrabold':
				return 'font-extrabold';
			case 'black':
				return 'font-black';
		}
	}

	function getFontSize(size: FontSize) {
		switch (size) {
			case 'xs':
				return 'text-xs';
			case 'sm':
				return 'text-sm';
			case 'md':
				return 'text-base';
			case 'lg':
				return 'text-lg';
			case 'xl':
				return 'text-xl';
			case '2xl':
				return 'text-2xl';
			case '3xl':
				return 'text-3xl';
			case '4xl':
				return 'text-4xl';
			case '5xl':
				return 'text-5xl';
			case '6xl':
				return 'text-6xl';
			case '7xl':
				return 'text-7xl';
			case '8xl':
				return 'text-8xl';
			case '9xl':
				return 'text-9xl';
		}
	}

	function getUnderline() {
		if (disabled) return '';
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
				return 'text-blue-500 hover:text-blue-600 visited:text-blue-800 cursor-pointer';
			case 'secondary':
				return 'text-neutral-500 hover:text-neutral-600 visited:text-neutral-800 cursor-pointer';
			case 'success':
				return 'text-green-500 hover:text-green-600 visted:text-green-800 cursor-pointer';
			case 'warning':
				return 'text-yellow-500 hover:text-yellow-600 visisted:text-yellow-800 cursor-pointer';
			case 'danger':
				return 'text-red-500 hover:text-red-600 visited:text-red-800 cursor-pointer';
		}
	}
	// classNames
	const linkClassNames = cx([
		'transition duration-200',
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
