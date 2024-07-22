export default [
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
		default: 'true'
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
