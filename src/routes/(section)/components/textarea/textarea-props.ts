export const textareaProps = [
	{
		name: 'id',
		type: 'string | undefined',
		default: '""'
	},
	{
		name: 'value',
		type: 'string | number | undefined',
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
		default: 'md'
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
		name: 'maxCount',
		type: 'number',
		default: 'undefined'
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
	},
	{
		name: 'row',
		type: 'number',
		default: '4'
	}
];

export const textareaSlots = [
	{
		name: 'base',
		description: 'This slot is applied to textarea element.'
	},
	{
		name: 'labelWrapper',
		description: 'This slot is applied to the div element(wrapper) for the label element.'
	},
	{
		name: 'label',
		description: 'This slot is applied to the label element.'
	},
	{
		name: 'invalidText',
		description: 'This slot is applied to the span element for invalid.'
	}
];
