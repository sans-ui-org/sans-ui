import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { Modal } from '$lib';
import ModalTest from './example/ModalTest.svelte';

describe('Modal component', async () => {
	test('should render', async () => {
		render(ModalTest);
		//const trigger = screen.getByRole('button');
		const trigger = screen.getByTestId('popup-triggered-button');
		await userEvent.click(trigger);
		expect(screen.getByRole('dialog')).toBeTruthy();
	});

	//title
	test('should show the correct title while a user hovers the tooltip', async () => {
		render(Modal, { title: 'This is title' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByText('This is title')).toBeTruthy();
	});

	//size
	test('should show the correct size of the title while a user hovers the tooltip', async () => {
		render(Modal, { size: 'sm' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-[60%]')).toBeTruthy();
	});
	test('should show the correct size of the title while a user hovers the tooltip', async () => {
		render(Modal, { size: 'md' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-[70%]')).toBeTruthy();
	});
	test('should show the correct size of the title while a user hovers the tooltip', async () => {
		render(Modal, { size: 'lg' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-[80%]')).toBeTruthy();
	});
	test('should show the correct size of the title while a user hovers the tooltip', async () => {
		render(Modal, { size: 'full' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-full')).toBeTruthy();
	});

	//dismissible
	/*
	test('should dismissable by clicking outside of the modal', async () => {
		render(ModalTest);
		const trigger = screen.getByRole('button');

		await userEvent.click(trigger);
		expect(screen.getByRole('dialog')).toBeTruthy();
	});

	test('should NOT dismissable by clicking outside of the modal', async () => {
		render(ModalTest);
		const trigger = screen.getByRole('button');

		await userEvent.click(trigger);
		expect(screen.getByRole('dialog')).toBeTruthy();
	});
	*/
});
