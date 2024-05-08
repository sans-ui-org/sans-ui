import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Button } from '$lib';

describe('Button component', async () => {
	test('should render', async () => {
		render(Button);
		expect(screen.getByRole('button')).toBeTruthy();
	});

	test('should render button label correctly', async () => {
		render(Button, { label: 'Button' });
		expect(screen.getByText('Button')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const button = render(Button, { disabled: true });

		expect(button.getByRole('button').getAttribute('disabled')).toBe('true');
	});

	test('should have type attribute', () => {
		const button = render(Button, { type: 'submit', label: 'Button' });

		expect(button.getByRole('button').getAttribute('type')).toBe('submit');
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
