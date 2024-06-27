import { Spinner } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		}
	}
} satisfies Meta<Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Spinner1: Story = {
	args: {
		type: 'primary',
		kind: 'loader1'
	}
};

export const Spinner2: Story = {
	args: {
		type: 'primary',
		kind: 'loader2'
	}
};

export const Spinner3: Story = {
	args: {
		type: 'primary',
		kind: 'loader3'
	}
};
