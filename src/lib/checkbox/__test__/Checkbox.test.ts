import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Checkbox } from '$lib';

describe('Checkbox component', async () => {
	test('should render', async () => {
		render(Checkbox);
		expect(screen.getByRole('label')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const button = render(Checkbox, { disabled: true });

		expect(button.getByRole('button').getAttribute('disabled')).toBe('true');
	});

	// TODO: Add tests for Button component
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
