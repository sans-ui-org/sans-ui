import type { Meta, StoryObj } from '@storybook/svelte';
import InputTemplate from './templates/InputTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Input',
	component: InputTemplate,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		placeholder: {
			control: {
				type: 'text'
			}
		},
		rounded: {
			control: {
				type: 'select'
			},
			options: ['none', 'sm', 'md', 'lg', 'full']
		},
		animation: {
			control: {
				type: 'boolean'
			}
		},
		readonly: {
			control: {
				type: 'boolean'
			}
		},
		disabled: {
			control: {
				type: 'boolean'
			}
		},
		invalid: {
			control: { type: 'boolean' }
		},
		invalidText: {
			control: { type: 'text' }
		},
		classes: {
			control: { type: 'object' }
		}
	},
	parameters: {
		docs: {
			page: null
		}
	}
} satisfies Meta<InputTemplate>;

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

export const Rounded: Story = {
	args: {
		...defaultArgs,
		rounded: 'full'
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

export const Clearable: Story = {
	args: {
		...defaultArgs,
		clearable: true
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
