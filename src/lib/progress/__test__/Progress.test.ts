import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Progress } from '$lib';

describe('Progress component', async () => {
	test('should render', async () => {
		render(Progress);
		expect(screen.getByRole('progress')).toBeTruthy();
	});

	test('should render progress label correctly', async () => {
		render(Progress, { customInnerLabel: 'progress' });
		expect(screen.getByText('Loading...')).toBeTruthy();
	});

	// TODO: Add tests for Progress component
	// on:click

	// EXAMPLE:
	// test('減算処理', async () => {
	// 	render(Counter);
	// 	const decreaseProgress = screen.getByLabelText('減算');
	// 	await fireEvent.click(decreaseProgress);
	// 	const counter = await screen.findByText('-1');
	// 	expect(counter).toBeTruthy();
	// });
	// test('加算処理', async () => {
	// 	render(Counter);
	// 	const increaseProgress = screen.getByLabelText('加算');
	// 	await fireEvent.click(increaseProgress);
	// 	const counter = await screen.findByText('1');
	// 	expect(counter).toBeTruthy();
	// });
});
