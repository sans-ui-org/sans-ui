import { Modal } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';
import ModalTemplate from './ModalTemplate.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Components/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'full']
		}
	}
} satisfies Meta<Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
	label: 'Modal'
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		...defaultArgs
	}
};

export const Sample: Story = {
	render: () => ModalTemplate,
	args: {
		...defaultArgs
	}
};

// export const Size: Story = {
// 	args: {
// 		...defaultArgs,
// 		size: 'lg'
// 	}
// };
