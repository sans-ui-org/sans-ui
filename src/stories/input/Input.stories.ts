import { Input } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		}
	},
	parameters: {
		docs: {
			page: null
		}	
	}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	label: 'This is label',
	placeholder: 'This is placeholder',
	animation: true
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
		variant: 'secondary'
	}
};

export const Size: Story = {
	args: {
		...defaultArgs
	}
};

export const NoAnimation: Story = {
	args: {
		...defaultArgs,
		animation: false
	}
};

export const Disabled: Story = {
	args: {
		...defaultArgs,
		disabled: true
	}
};

export const Counter: Story = {
	args: {
		...defaultArgs,
		maxCount: 20
	}
};

export const Readonly: Story = {
	args: {
		...defaultArgs,
		readonly: true
	}
};

export const Invalid: Story = {
	args: {
		...defaultArgs,
		invalid: true,
		invalidText: 'This is invalid text'
	}
};

// TODO: Password template
