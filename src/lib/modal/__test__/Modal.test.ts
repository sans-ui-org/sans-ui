import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ModalTest from './example/ModalTest.svelte';

describe('Modal component', async () => {
	test('should render', async () => {
		render(ModalTest);
		const trigger = screen.getByRole('button');

		await userEvent.click(trigger);
		expect(screen.getByRole('dialog')).toBeTruthy();
	});

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
});
