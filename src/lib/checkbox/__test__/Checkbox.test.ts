import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Checkbox } from '$lib';

describe('Checkbox component', async () => {
	test('should render', async () => {
		render(Checkbox);
		expect(screen.getByRole('checkbox')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const checkbox = render(Checkbox, { disabled: true });

		expect(checkbox.getByRole('checkbox').getAttribute('aria-disabled')).toBe('true');
	});

	test('should have checked attribute', async () => {
		const checkbox = render(Checkbox, { disabled: true });

		expect(checkbox.getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
	});

	// TODO: Add tests for Checkbox component
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
