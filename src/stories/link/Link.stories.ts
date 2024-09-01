import type { Meta, StoryObj } from '@storybook/svelte';
import LinkTemplate from './examples/LinkTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// one user clics "show the code" button
// <LinkTemplate />
const meta = {
	title: 'Components/Link',
	component: LinkTemplate,
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl']
		},
		bold: {
			control: { type: 'select' },
			options: [
				'thin',
				'extralight',
				'light',
				'normal',
				'medium',
				'semibold',
				'bold',
				'extrabold',
				'black'
			]
		},
		underlineType: {
			control: { type: 'select' },
			options: ['none', 'hover', 'always', 'active']
		},
		disabled: {
			control: { type: 'boolean' }
		},
		external: {
			control: { type: 'boolean' }
		},
		windowIcon: {
			control: { type: 'boolean' }
		}
	},
	parameters: {
		docs: {
			page: null
		}
	}
} satisfies Meta<LinkTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	href: 'https://google.com'
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		...defaultArgs
	}
};

export const UnderlineType: Story = {
	args: {
		...defaultArgs,
		underlineType: 'active'
	}
};

export const Disabled: Story = {
	args: {
		...defaultArgs,
		disabled: true
	}
};

export const External: Story = {
	args: {
		...defaultArgs,
		external: true
	}
};

export const WindowIcon: Story = {
	args: {
		...defaultArgs,
		external: true,
		windowIcon: true
	}
};
