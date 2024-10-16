import type { Meta, StoryObj } from '@storybook/svelte';
import SwitchTemplate from './templates/SwitchTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Switch',
	component: SwitchTemplate,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
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
			control: {
				type: 'boolean'
			}
		},
		invalidText: {
			control: {
				type: 'text'
			}
		},
		animation: {
			control: {
				type: 'boolean'
			}
		},
		classes: {
			control: {
				type: 'object'
			}
		}
	},
	parameters: {
		docs: {
			page: null
		}
	}
} satisfies Meta<SwitchTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	label: 'This is label',
	textForOn: 'On',
	textForOff: 'Off'
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

export const Animation: Story = {
	args: {
		...defaultArgs,
		animation: true
	}
};

export const Invalid: Story = {
	args: {
		...defaultArgs,
		invalid: true,
		invalidText: 'This is an invalid input'
	}
};
