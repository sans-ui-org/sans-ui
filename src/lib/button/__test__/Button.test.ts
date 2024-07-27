import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Button } from '$lib';

describe('Button component', async () => {
	test('should render', async () => {
		render(Button);
		expect(screen.getByRole('button')).toBeTruthy();
	});

	// variant
	test('should have correct variant', () => {
		const button = render(Button, { variant: 'primary' });

		expect(button.getByRole('button').classList.contains('bg-blue-500')).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Button, { variant: 'secondary' });

		expect(button.getByRole('button').classList.contains('bg-neutral-500')).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Button, { variant: 'success' });
		expect(button.getByRole('button').classList.contains('bg-green-500')).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Button, { variant: 'warning' });
		expect(button.getByRole('button').classList.contains('bg-yellow-500')).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Button, { variant: 'danger' });
		expect(button.getByRole('button').classList.contains('bg-red-500')).toBeTruthy();
	});

	// size
	test('should have correct size', () => {
		const button = render(Button, { size: 'sm' });
		expect(button.getByRole('button').classList.contains('text-sm')).toBeTruthy();
	});

	test('should have correct size', () => {
		const button = render(Button, { size: 'md' });
		expect(button.getByRole('button').classList.contains('text-base')).toBeTruthy();
	});

	test('should have correct size', () => {
		const button = render(Button, { size: 'lg' });
		expect(button.getByRole('button').classList.contains('text-lg')).toBeTruthy();
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
