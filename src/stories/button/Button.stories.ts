import type { Meta, StoryObj } from '@storybook/svelte';
import ButtonTemplate from './template/ButtonTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Button',
	component: ButtonTemplate,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		kind: {
			control: { type: 'select' },
			options: ['solid', 'bordered', 'flat', 'shadow']
		},
		rounded: {
			control: { type: 'select' },
			options: ['none', 'sm', 'md', 'lg', 'full']
		},
		disabled: {
			control: { type: 'boolean' }
		},
		rippled: {
			control: { type: 'boolean' }
		},
		iconOnly: {
			control: { type: 'boolean' }
		},
		href: {
			control: { type: 'text' }
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
} satisfies Meta<ButtonTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		...defaultArgs
	},
	parameters: {
		design: {
			type: 'figma',
			url: "https://www.figma.com/design/uXtJmwvaMFP8uYqb8ocWgm/harukikuriwada's-team-library?node-id=2311-6768&t=wFZAHl6BOd6IpaFs-4"
		}
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

export const Rounded: Story = {
	args: {
		...defaultArgs,
		rounded: 'md'
	}
};

export const Flat: Story = {
	args: {
		...defaultArgs,
		kind: 'flat'
	}
};

export const Shadow: Story = {
	args: {
		...defaultArgs,
		kind: 'shadow'
	}
};

export const Bordered: Story = {
	args: {
		...defaultArgs,
		kind: 'bordered'
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

export const NoRippled: Story = {
	args: {
		...defaultArgs,
		rippled: false
	}
};

export const IconOnly: Story = {
	args: {
		...defaultArgs,
		iconOnly: true
	}
};

export const ButtonAsLink: Story = {
	args: {
		...defaultArgs,
		href: 'https://google.com'
	}
};
