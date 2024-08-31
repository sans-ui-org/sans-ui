export const checkboxProps = [
	{
		name: 'variant',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
		default: "'primary'"
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: 'md'
	},
	{
		name: 'label',
		type: 'string',
		default: '""'
	},
	{
		name: 'value',
		type: 'string',
		default: 'undefined'
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'defaultChecked',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'indeterminate',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'animation',
		type: 'boolean',
		default: 'true'
	}
];

export const checkboxSlots = [
	{
		name: 'base',
		description: 'This slot is applied to the div element(wrapper) for icon slot.'
	},
	{
		name: 'icon',
		description: 'This slot is applied to the svg element(check icon).'
	},
];