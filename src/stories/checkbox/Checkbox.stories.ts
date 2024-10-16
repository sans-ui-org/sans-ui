import type { Meta, StoryObj } from '@storybook/svelte';
import CheckboxTemplate from './template/CheckboxTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Checkbox',
	component: CheckboxTemplate,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		checked: {
			control: { type: 'boolean' }
		},
		value: {
			control: { type: 'text' }
		},
		disabled: {
			control: { type: 'boolean' }
		},
		indeterminate: {
			control: { type: 'boolean' }
		},
		animation: {
			control: { type: 'boolean' }
		}
	},
	parameters: {
		docs: {
			page: null
		}
	}
} satisfies Meta<CheckboxTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};

export const Size: Story = {
	args: {
		size: 'sm'
	}
};

export const WithLabel: Story = {
	args: {}
};

export const DefaultChecked: Story = {
	args: {
		checked: true
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

export const Disabled: Story = {
	args: {
		checked: true,
		disabled: true
	}
};
