import type { Meta, StoryObj } from '@storybook/svelte';
import SelectTemplate from './templates/SelectTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Select',
	component: SelectTemplate,
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
		label: {
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
} satisfies Meta<SelectTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	label: 'This is a label',
	options: [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' },
		{
			value: '5',
			label:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.'
		}
	],
	placeholder: 'Select an option'
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
		...defaultArgs,
		size: 'lg'
	}
};

export const Disabled: Story = {
	args: {
		...defaultArgs,
		disabled: true
	}
};

export const Readonly: Story = {
	args: {
		...defaultArgs,
		readonly: true
	}
};

export const NoAnimation: Story = {
	args: {
		...defaultArgs,
		animation: false
	}
};

export const Rounded: Story = {
	args: {
		...defaultArgs,
		rounded: 'full'
	}
};

export const Invalid: Story = {
	args: {
		...defaultArgs,
		invalid: true,
		invalidText: 'This is an invalid input'
	}
};
