export default [
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
