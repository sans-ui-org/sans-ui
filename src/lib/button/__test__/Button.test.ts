import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Button } from '$lib';

describe('Button component', async () => {
	test('should render', async () => {
		render(Button);
		expect(screen.getByRole('button')).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Button, { variant: 'secondary' });

		expect(button.getByRole('button').classList.contains('bg-neutral-500')).toBeTruthy();
	});

	test('should have correct size', () => {
		const button = render(Button, { size: 'sm' });

		expect(button.getByRole('button').classList.contains('text-sm')).toBeTruthy();
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
