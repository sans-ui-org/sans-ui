export async function load() {
	const menu = [
		{
			title: 'Documentation',
			items: [
				{
					title: 'Getting started',
					slug: '/docs/getting-started'
				},
				{
					title: 'Installation',
					slug: '/docs/installation'
				}
			]
		},
		{
			title: 'Component',
			items: [
				{
					title: 'Button',
					slug: '/components/button'
				},
				{
					title: 'Checkbox',
					slug: '/components/checkbox'
				},
				{
					title: 'Input',
					slug: '/components/input'
				},
				{
					title: 'Link',
					slug: '/components/link'
				},
				{
					title: 'Modal',
					slug: '/components/modal'
				},
				{
					title: 'Progress',
					slug: '/components/progress'
				},
				{
					title: 'Select',
					slug: '/components/select'
				},
				{
					title: 'Spinner',
					slug: '/components/spinner'
				},
				{
					title: 'Switch',
					slug: '/components/switch'
				},
				{
					title: 'Textarea',
					slug: '/components/textarea'
				},
				{
					title: 'Tooltip',
					slug: '/components/tooltip'
				}
			]
		},
		{
			title: 'Action',
			items: [
				{
					title: 'Focus',
					slug: '/actions/focus'
				},
				{
					title: 'TypeWriter',
					slug: '/actions/type-writer'
				},
				{
					title: 'Ripple',
					slug: '/actions/ripple'
				}
			]
		}
	];

	return {
		menu
	};
}
