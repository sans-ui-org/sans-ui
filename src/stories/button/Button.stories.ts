import type { Meta, StoryObj } from '@storybook/svelte';
import ButtonTemplate from './template/ButtonTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Button',
	component: ButtonTemplate,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
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
