import { Tooltip } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';
import TooltipTemplate from './examples/TooltipTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		}
	}
} satisfies Meta<Tooltip>;

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

export const Playground: Story = {
	render: () => TooltipTemplate,
	args: {
		...defaultArgs
	}
};
