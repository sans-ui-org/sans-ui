export default [
	{
		name: 'variant',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
		default: "'primary'"
	},
	{
		name: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'",
		default: "'md'"
	},
	{
		name: 'bold',
		type: "'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'",
		default: "'medium'"
	},
	{
		name: 'underlineType',
		type: "'none' | 'hover' | 'always' | 'active'",
		default: "'always'"
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'href',
		type: 'string',
		default: '""'
	}
];
