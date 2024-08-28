export const tooltipProps = [
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

export const tooltipSlots = [
	{
		name: 'base',
		description: 'This slot is applied to the div element(tooltip component).'
	},
	{
		name: 'trigger',
		description: 'This slot is applied to the button element(trigger).'
	},
	{
		name: 'tooltipContent',
		description:
			'This slot is applied to the span element that contains the content(the text for the tooltip).'
	}
];
