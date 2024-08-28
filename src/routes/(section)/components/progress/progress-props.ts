export const progressProps = [
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

export const progressSlots = [
	{
		name: 'base',
		description: 'this slot is applied to the div element(`progressbar` role).'
	}
];
