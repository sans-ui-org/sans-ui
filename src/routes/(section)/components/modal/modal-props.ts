export const modalProps = [
	{
		name: 'open',
		type: 'boolean',
		default: 'false'
	},
	{
		name: 'title',
		type: 'string',
		default: 'undefined'
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg' | 'full'",
		default: 'md'
	},
	{
		name: 'dismissable',
		type: 'boolean',
		default: 'true'
	}
];

export const modalSlots = [
	{
		name: 'base',
		description: 'this slot is applied to the div element(`dialog` role).'
	},
	{
		name: 'overlay',
		description: 'this slot is applied to the div element that overlays a whole screen.'
	},
	{
		name: 'wrapper',
		description: 'this slot is applied to the div element(wrapper) for the modal body.'
	}
];
