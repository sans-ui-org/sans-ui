import { Spinner } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Spinner',
	component: Spinner,
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		kind: {
			control: { type: 'select' },
			options: ['loader1', 'loader2', 'loader3']
		}
	},
	parameters: {
		docs: {
			page: null
		}	
	}
} satisfies Meta<Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Spinner1: Story = {
	args: {
		kind: 'loader1'
	}
};

export const Spinner2: Story = {
	args: {
		kind: 'loader2'
	}
};

export const Spinner3: Story = {
	args: {
		kind: 'loader3'
	}
};
