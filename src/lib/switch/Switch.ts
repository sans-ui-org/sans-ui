import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export type SwitchSlotsProps = {
	className?: string;
	size: ComponentSize;
	variant: ComponentVariant;
	disabled?: boolean;
	readonly?: boolean;
	toggled: boolean;
	invalid?: boolean;
	invalidText?: string;
};

export function getSwitchSlots({
	className = '',
	size = 'md',
	variant = 'success',
	disabled = false,
	// readonly = false,
	toggled = false,
	invalid = false,
	invalidText = ''
}: SwitchSlotsProps) {
	const getFontSize = () => {
		switch (size) {
			case 'sm':
				return 'text-xs';
			case 'md':
				return 'text-sm';
			case 'lg':
				return 'text-md';
		}
	};
	const getSwitchBgColor = () => {
		if (!toggled) return 'bg-gray-400';
		if (disabled) return 'bg-gray-300';
		switch (variant) {
			case 'primary':
				return 'bg-blue-600';
			case 'secondary':
				return 'bg-neutral-600';
			case 'success':
				return 'bg-green-600';
			case 'warning':
				return 'bg-yellow-600';
			case 'danger':
				return 'bg-red-600';
		}
	};
	const getSwitchSize = () => {
		switch (size) {
			case 'sm':
				return 'w-[40px] h-[20px]';
			case 'md':
				return 'w-[60px] h-[30px]';
			case 'lg':
				return 'w-[80px] h-[40px]';
		}
	};
	const getSwitchChipSize = () => {
		switch (size) {
			case 'sm':
				return 'w-[10px] h-[10px]';
			case 'md':
				return 'w-[20px] h-[20px]';
			case 'lg':
				return 'w-[30px] h-[30px]';
		}
	};
	const getSwitchChipTranslate = () => {
		switch (size) {
			case 'sm':
				return 'translate-x-[20px]';
			case 'md':
				return 'translate-x-[30px]';
			case 'lg':
				return 'translate-x-[40px]';
		}
	};

	// slots
	return {
		base: cx(['flex flex-col gap-2 font-normal']),
		label: cx([
			'font-normal',
			getFontSize(),
			invalid && invalidText && invalidText !== '' ? 'text-red-500' : ''
		]),
		switchWrapper: cx(['flex flex-row gap-2 items-center']),
		switch: cx([
			getSwitchSize(),
			'rounded-full flex items-center p-1.5',
			'transition-colors duration-300 ease-in-out',
			disabled ? 'cursor-not-allowed' : 'cursor-pointer',
			getSwitchBgColor(),
			className
		]),
		switchChip: cx([
			getSwitchChipSize(),
			'rounded-full',
			disabled ? 'bg-gray-500' : 'bg-white',
			'transition-all duration-300 ease',
			toggled ? getSwitchChipTranslate() : 'translate-x-0'
		]),
		switchLabel: cx(['font-bold']),
		invalidText: 'text-sm text-red-500 mt-1'
	};
}
