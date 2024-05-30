import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Select } from '$lib';

describe('Select component', async () => {
	test('should render', async () => {
		render(Select, { id: 'select_id' });
		expect(screen.getByRole('button', { name: /select_id/i })).toBeTruthy();
	});

	test('should render seleect label correctly', async () => {
		render(Select, { id: 'select_id' });
		expect(screen.getByRole('label', { name: /select_id/i })).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const select = render(Select, { id: 'select_id', disabled: true });

		expect(select.getByRole('button', { name: /select_id/i }).getAttribute('disabled')).toBe(
			'true'
		);
	});

	// TODO: Add tests for Select component
	// on:click

	// EXAMPLE:
	// test('減算処理', async () => {
	// 	render(Counter);
	// 	const decreaseButton = screen.getByLabelText('減算');
	// 	await fireEvent.click(decreaseButton);
	// 	const counter = await screen.findByText('-1');
	// 	expect(counter).toBeTruthy();
	// });
	// test('加算処理', async () => {
	// 	render(Counter);
	// 	const increaseButton = screen.getByLabelText('加算');
	// 	await fireEvent.click(increaseButton);
	// 	const counter = await screen.findByText('1');
	// 	expect(counter).toBeTruthy();
	// });
});
