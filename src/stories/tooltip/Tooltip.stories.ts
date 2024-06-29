import type { Meta, StoryObj } from '@storybook/svelte';
import TooltipTemplate from './examples/TooltipTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Tooltip',
	component: TooltipTemplate,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		}
	}
} satisfies Meta<TooltipTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	title: 'This is a tooltip'
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		...defaultArgs
	}
};

export const Variant: Story = {
	args: {
		...defaultArgs,
		variant: 'success'
	}
};

export const Size: Story = {
	args: {
		...defaultArgs,
		size: 'sm'
	}
};
