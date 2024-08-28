export const buttonProps = [
	{
		name: 'variant',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
		default: 'primary'
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: 'md'
	},
	{
		name: 'kind',
		type: "'solid' | 'bordered' | 'flat' | 'shadow'",
		default: 'solid'
	},
	{
		name: 'rounded',
		type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
		default: 'full'
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
	},
	{
		name: 'iconOnly',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'classes',
		type: '{ base: string }',
		default: '{}'
	}
];

export const buttonSlots = [
	{
		name: 'base',
		description: 'This slot is applied to button element.'
	}
];
