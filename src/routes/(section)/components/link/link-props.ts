export const linkProps = [
	{
		name: 'variant',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
		default: "'primary'"
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'",
		default: "'md'"
	},
	{
		name: 'fontWeight',
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
		name: 'windowIcon',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'external',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'animation',
		type: 'boolean',
		default: 'true'
	},
	{
		name: 'href',
		type: 'string',
		default: '""'
	}
];

export const linkSlots = [
	{
		name: 'base',
		description: 'this slot is applied to the anchor element.'
	},
	{
		name: 'icon',
		description: 'this slot is applied to the window icon svg element.'
	}
];
