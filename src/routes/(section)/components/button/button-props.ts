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

export const buttonHandlers = [
	{
		name: 'on:click',
		type: 'MouseEventHandler',
		description: 'Button click handler'
	},
	{
		name: 'on:change',
		type: 'FormEventHandler',
		description:
			'The change event is fired for , , and elements when a change to the element value is committed by the user.'
	},
	{
		name: 'on:keydown',
		type: 'KeyboardEventHandler',
		description: 'A key is pressed down.'
	},
	{
		name: 'on:keyup',
		type: 'KeyboardEventHandler',
		description: 'A key is released.'
	},
	{
		name: 'on:mouseenter',
		type: 'MouseEventHandler',
		description: 'A pointing device is moved onto the element that has the listener attached.'
	},
	{
		name: 'on:mouseleave',
		type: 'MouseEventHandler',
		description: 'A pointing device is moved off the element that has the listener attached.'
	}
];

export const buttonSlots = [
	{
		name: 'base',
		description: 'This slot is applied to button element.'
	}
];
