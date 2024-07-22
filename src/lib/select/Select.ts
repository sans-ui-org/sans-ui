import { cx, type ComponentSize, type ComponentVariant } from '$lib/utils/utils';

export interface Option {
	label: string;
	value: string | number | boolean | symbol;
}

export type SelectProps = {
	className: string;
	size: ComponentSize;
	variant: ComponentVariant;
	open: boolean;
	animation: boolean;
	readonly: boolean;
	disabled: boolean;
	invalid: boolean;
	invalidText: string | undefined;
};

export function getSelectSlots({
	className,
	size,
	variant,
	open,
	animation,
	readonly,
	disabled,
	invalid,
	invalidText
}: SelectProps) {
	const getFontSize = () => {
		switch (size) {
			case 'sm':
				return 'text-xs';
			case 'md':
				return 'text-sm';
			case 'lg':
				return 'text-base';
		}
	};
	const getButtonHeight = () => {
		switch (size) {
			case 'sm':
				return 'h-8';
			case 'md':
				return 'h-10';
			case 'lg':
				return 'h-12';
		}
	};

	const getButtonOutline = () => {
		if (invalid && invalidText && invalidText !== '') return 'outline-none';
		switch (variant) {
			case 'primary':
				return 'focus-visible:outline-blue-500';
			case 'secondary':
				return 'focus-visible:outline-gray-500';
			case 'danger':
				return 'focus-visible:outline-red-500';
			case 'warning':
				return 'focus-visible:outline-yellow-500';
			case 'success':
				return 'focus-visible:outline-green-500';
			default:
				return 'focus-visible:outline-gray-500';
		}
	};

	return {
		base: cx([
			'relative border mt-1',
			invalid && invalidText && invalidText !== '' ? 'border-red-500' : ''
		]),
		label: cx([
			'font-normal',
			getFontSize(),
			invalid && invalidText && invalidText !== '' ? 'text-red-500' : ''
		]),
		trigger: cx([
			className,
			'w-full flex px-4 py-2 justify-between items-center bg-white',
			getButtonHeight(),
			getButtonOutline(),
			disabled ? 'cursor-not-allowed text-gray-500 bg-gray-100' : 'cursor-pointer'
		]),
		placeholderContainer: 'w-full truncate flex items-start',
		placeholder: 'placeholder:text-neutral-500 truncate',
		listbox: cx([
			'border absolute overflow-auto max-h-40 min-w-[160px] mt-1 w-full origin-top transition-all',
			open ? 'scale-y-1 shadow-lg' : 'scale-y-0 opacity-0',
			animation ? 'duration-200' : ''
		]),
		option: cx([
			open ? 'flex' : 'none',
			'items-center px-4 py-2 justify-between gap-1 items-center border border-transparent bg-white hover:bg-gray-100',
			readonly ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer'
		]),
		optionTextWrapper: 'w-full truncate flex items-start',
		optionText: 'truncate',
		invalidText: 'text-sm text-red-500 mt-1'
	};
}
