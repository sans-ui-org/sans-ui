export default [
	{
		name: 'id',
		type: 'string | undefined',
		default: '""'
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
		name: 'title',
		type: 'string',
		default: '""'
	}
];
