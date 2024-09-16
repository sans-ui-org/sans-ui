export const switchProps = [
	{
		name: 'id',
		type: 'string | undefined',
		default: '""'
	},
	{
		name: 'textOnOn',
		type: 'string',
		default: "''"
	},
	{
		name: 'textOnOff',
		type: 'string',
		default: "''"
	},
	{
		name: 'label',
		type: 'string',
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
		default: "'md'"
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
	},
	{
		name: 'defaultToggled',
		type: 'boolean',
		default: 'false'
	}
];

export const switchHandlers = [
	{
		name: 'on:toggle',
		type: '(toggled: boolean) => void',
		description: "When the switch is toggled. The switch's state is passed as an argument."
	},
	{
		name: 'on:click',
		type: '(toggled: boolean, event: MouseEvent) => void',
		description: "When the switch is clicked. The switch's value is passed as an argument."
	}
];

export const switchSlots = [
	{
		name: 'base',
		description: 'This slot is applied to the div element(switch component).'
	},
	{
		name: 'labelWrapper',
		description: 'This slot is applied to the div element(wrapper) for the label element.'
	},
	{
		name: 'label',
		description: 'This slot is applied to the label element.'
	},
	{
		name: 'inputWrapper',
		description: 'This slot is applied to the div element(wrapper) for the input element(base).'
	},
	{
		name: 'startContent',
		description:
			'This slot is applied to the start-content icon wrapper element if you pass some content through `startContent` prop.'
	},
	{
		name: 'endContent',
		description:
			'This slot is applied to the end-content icon wrapper element if you pass some content through `endContent` prop.'
	}
];
