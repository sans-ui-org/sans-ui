import { Link } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Link',
	component: Link,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		size: {
			control: { type: 'select' },
			options: ['xs', 'sm', 'md', 'lg', 'xl']
		},
		underline: {
			control: { type: 'select' },
			options: ['none', 'hover', 'always', 'active']
		}
	}
} satisfies Meta<Link>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	url: 'https://storybook.js.org'
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		...defaultArgs
	}
};

export const Underline: Story = {
	args: {
		...defaultArgs,
        underline: "none",
	}
};

export const Size: Story = {
	args: {
		...defaultArgs,
		size: 'lg'
	}
};

