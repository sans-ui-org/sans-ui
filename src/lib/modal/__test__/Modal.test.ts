import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Modal } from '$lib';

describe('Modal component', async () => {
	test('should render', async () => {
		render(Modal);
		expect(screen.getByRole('dialog')).toBeTruthy();
	});

	// TODO: Add tests for Modal component
	// on:click

	// EXAMPLE:
	// test('減算処理', async () => {
	// 	render(Counter);
	// 	const decreaseModal = screen.getByLabelText('減算');
	// 	await fireEvent.click(decreaseModal);
	// 	const counter = await screen.findByText('-1');
	// 	expect(counter).toBeTruthy();
	// });
	// test('加算処理', async () => {
	// 	render(Counter);
	// 	const increaseModal = screen.getByLabelText('加算');
	// 	await fireEvent.click(increaseModal);
	// 	const counter = await screen.findByText('1');
	// 	expect(counter).toBeTruthy();
	// });
});
