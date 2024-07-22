export async function load() {
	const gettingStartedMenu = [
		{
			title: 'Getting started',
			slug: 'getting-started'
		},
		{
			title: 'Installation',
			slug: 'installation'
		}
	];
	const componentMenu = [
		{
			title: 'Button',
			slug: 'button'
		},
		{
			title: 'Checkbox',
			slug: 'checkbox'
		},
		{
			title: 'Input',
			slug: 'input'
		},
		{
			title: 'Link',
			slug: 'link'
		},
		{
			title: 'Modal',
			slug: 'modal'
		},
		{
			title: 'Progress',
			slug: 'progress'
		},
		{
			title: 'Select',
			slug: 'select'
		},
		{
			title: 'Spinner',
			slug: 'spinner'
		},
		{
			title: 'Switch',
			slug: 'switch'
		},
		{
			title: 'Textarea',
			slug: 'textarea'
		},
		{
			title: 'Tooltip',
			slug: 'tooltip'
		}
	];

	return {
		gettingStartedMenu,
		componentMenu
	};
}
