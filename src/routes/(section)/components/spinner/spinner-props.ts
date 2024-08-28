export const spinnerProps = [
	{
		name: 'variant',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
		default: "'primary'"
	},
	{
		name: 'kind',
		type: "'loader1' | 'loader2' | 'loader3'",
		default: "'loader1'"
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'"
	}
];

export const spinnerSlots = [
	{
		name: 'base',
		description: 'this slot is applied to the div element for spinner.'
	},
	{
		name: 'dot',
		description: 'this slot is applied to the div element(those circling dots for `loader2`).'
	}
]