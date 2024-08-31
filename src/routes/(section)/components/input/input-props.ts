export const inputProps = [
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
		name: 'clearable',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'rounded',
		type: "'none' | 'sm' | 'md' | 'lg' | 'full",
		default: 'none'
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
		name: 'startContent',
		type: 'SvelteComponent',
		default: 'undefined'
	},
	{
		name: 'endContent',
		type: 'SvelteComponent',
		default: 'undefined'
	}
];

export const inputSlots = [
	{
		name: 'base',
		description: 'This slot is applied to input element.'
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
		name: 'inputWrapper',
		description: 'This slot is applied to the div element(wrapper) for the input element(base).'
	},
	{
		name: 'startContent',
		description:
			'This slot is applied to the start-content icon wrapper element if you pass some content through `startContent` prop.'
	},
	{
		name: 'endContent',
		description:
			'This slot is applied to the end-content icon wrapper element if you pass some content through `endContent` prop.'
	}
];
