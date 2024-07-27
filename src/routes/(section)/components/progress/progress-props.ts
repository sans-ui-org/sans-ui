export default [
	{
		name: 'variant',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
		default: "'primary'"
	},
	{
		name: 'value',
		type: 'number | undefined',
		default: 50
	},
	{
		name: 'size',
		type: 'number',
		default: 80
	},
	{
		name: 'trackWidth',
		type: 'number | undefined',
		default: 7
	},
	{
		name: 'customInnerLabel',
		type: 'string',
		default: '""'
	}
];
