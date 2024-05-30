import { cx, type ComponentSize } from '$lib/utils/utils';

export interface Option {
	label: string;
	value: object;
}

export type SelectProps = {
	className: string;
	size: ComponentSize;
	open: boolean;
	readonly: boolean;
	disabled: boolean;
	invalid: boolean;
	invalidText: string;
};

export function getSelectSlots({
	className,
	size,
	// open,
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
				return 'text-md';
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
			'w-full flex px-4 py-2 justify-between items-center',
			getButtonHeight(),
			disabled ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer'
		]),
		placeholderContainer: 'w-full truncate flex items-start',
		placeholder: 'truncate',
		listbox: cx([
			'border absolute overflow-auto max-h-40 min-w-[160px] mt-1 w-full  origin-top'
			// TODO: how do we introduce animation...
			// open ? 'scale-y-1 shadow-lg' : 'scale-y-0 opacity-0',
			// animation ? 'duration-200' : ''
		]),
		option: cx([
			'flex items-center px-4 py-2 justify-between gap-1 items-center border border-transparent hover:bg-gray-100',
			readonly ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer'
			// open ? '' : 'none'
		]),
		optionTextWrapper: 'w-full truncate flex items-start',
		optionText: 'truncate',
		invalidText: 'text-sm text-red-500 mt-1'
	};
}
