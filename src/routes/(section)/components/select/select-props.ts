export const selectProps = [
	{
		name: 'id',
		type: 'string | undefined',
		default: '""'
	},
	{
		name: 'defaultSelected',
		type: 'Option',
		default: 'undefined'
	},
	{
		name: 'variant',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
		default: "'primary'"
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'"
	},
	{
		name: 'options',
		type: 'Option[]',
		default: '[]'
	},
	{
		name: 'label',
		type: 'string',
		default: '""'
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'animation',
		type: 'boolean',
		default: 'true'
	},
	{
		name: 'placeholder',
		type: 'string',
		default: '""'
	},
	{
		name: 'invalid',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'invalidText',
		type: 'string',
		default: '""'
	}
];

export const selectHandlers = [
	{
		name: 'on:toggle',
		type: '(open: boolean) => void',
		description: 'When the dropdown is opened or closed.'
	},
	{
		name: 'on:select',
		type: '(selected: Option) => void',
		description: "When an option is selected. The selected option's value is passed as an argument."
	},
	{
		name: 'on:close',
		type: '(open: boolean) => void',
		description: "When the dropdown is closed. The dropdown's open state is passed as an argument."
	},
	{
		name: 'on:mousedown',
		type: '() => void',
		description: 'A pointing device button (usually a mouse) is pressed on an element.'
	},
	{
		name: 'on:mouseup',
		type: '() => void',
		description: 'A pointing device button (usually a mouse) is released over an element.'
	}
];

export const selectSlots = [
	{
		name: 'base',
		description: 'This slot is applied to the div element(`combobox` role).'
	},
	{
		name: 'label',
		description: 'This slot is applied to the label element.'
	},
	{
		name: 'trigger',
		description: 'This slot is applied to the button element(trigger for the dropdown).'
	},
	{
		name: 'placeholder',
		description: 'This slot is applied to the span element(placeholder).'
	},
	{
		name: 'placeholderWrapper',
		description: 'This slot is applied to the div elment(placeholder wrapper).'
	},
	{
		name: 'listbox',
		description: 'This slot is applied to the ul elment(`menu` role).'
	},
	{
		name: 'option',
		description: 'This slot is applied to the li elment(`option` role).'
	},
	{
		name: 'optionTextWrapper',
		description: "This slot is applied to the div elment(wrapper for option's text)."
	},
	{
		name: 'optionText',
		description: "This slot is applied to the span elment(option's text)."
	},
	{
		name: 'invalidText',
		description: 'This slot is applied to the span elment for invalid text.'
	}
];
