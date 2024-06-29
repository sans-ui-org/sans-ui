import { Progress } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Progress',
	component: Progress,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		}
	}
} satisfies Meta<Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Percentage: Story = {
	args: {
		value: 100
	}
};

export const CustomInnerLabel: Story = {
	args: {
		size: 90,
		customInnerLabel: 'Loading...'
	}
};

export const TrackWidth: Story = {
	args: {
		trackWidth: 15
	}
};

// TODO: Sample: with animation that gradually increases the value
// export const TrackWidth: Story = {
// 	args: {
// 		trackWidth: 15
// 	}
// };