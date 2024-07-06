import type { Meta, StoryObj } from '@storybook/svelte';
import ModalTemplate from './examples/ModalTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Modal',
	component: ModalTemplate,
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'full']
		}
	},
	parameters: {
		docs: {
			page: null
		}
	}
} satisfies Meta<ModalTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	title: 'Here is Modal Title.'
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		...defaultArgs
	}
};

export const Size: Story = {
	args: {
		...defaultArgs,
		size: 'full'
	}
};

export const Non_Dismissible: Story = {
	args: {
		...defaultArgs,
		dismissible: false
	}
};

export const Notification: Story = {
	args: {
		size: 'sm',
		...defaultArgs
	}
};
