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
		description: "This slot is applied to the span elment for invalid text."
	}
];
