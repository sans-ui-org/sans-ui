import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ModalTest from './example/ModalTest.svelte';

describe('Modal component', async () => {
	test('should render', async () => {
		render(ModalTest);
		const trigger = screen.getByTestId('popup-triggered-button');
		await userEvent.click(trigger);
		expect(screen.getByRole('dialog')).toBeTruthy();
	});

	//title
	test('should show the correct title when a user open the modal', async () => {
		render(ModalTest, { title: 'This is title' });
		const trigger = screen.getByTestId('popup-triggered-button');
		await userEvent.click(trigger);
		expect(screen.getByText('This is title')).toBeTruthy();
	});

	//size
	test('should show the correct size(sm) of the title when a user open the modal', async () => {
		render(ModalTest, { size: 'sm' });
		const trigger = screen.getByTestId('popup-triggered-button');
		await userEvent.click(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-[60%]')).toBeTruthy();
	});
	test('should show the correct size(md) of the title when a user open the modal', async () => {
		render(ModalTest, { size: 'md' });
		const trigger = screen.getByTestId('popup-triggered-button');
		await userEvent.click(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-[70%]')).toBeTruthy();
	});
	test('should show the correct size(lg) of the title when a user open the modal', async () => {
		render(ModalTest, { size: 'lg' });
		const trigger = screen.getByTestId('popup-triggered-button');
		await userEvent.click(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-[80%]')).toBeTruthy();
	});
	test('should show the correct size(full) of the title while a user hovers the tooltip', async () => {
		render(ModalTest, { size: 'full' });
		const trigger = screen.getByTestId('popup-triggered-button');
		await userEvent.click(trigger);
		//const trigger = screen.getByRole('button');
		//await userEvent.hover(trigger);
		expect(screen.getByTestId('modal-area').classList.contains('w-full')).toBeTruthy();
	});

	//TODO:dismissible
});
