import { Checkbox } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		defaultChecked: {
			control: { type: 'boolean' }
		}
	},
	parameters: {
		docs: {
			page: null
		}	
	}
} satisfies Meta<Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};

export const DefaultChecked: Story = {
	args: {
		defaultChecked: true
	}
};

export const Indeterminate: Story = {
	args: {
		indeterminate: true
	}
};

export const NoAnimation: Story = {
	args: {
		animation: false
	}
};
