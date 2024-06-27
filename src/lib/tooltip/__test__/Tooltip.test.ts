import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Tooltip } from '$lib';

describe('Tooltip component', async () => {
	test('should render', async () => {
		render(Tooltip);
		expect(screen.getByRole('tooltip')).toBeTruthy();
	});

	test('should render tooltip label correctly', async () => {
		render(Tooltip, { label: 'Tooltip' });
		expect(screen.getByText('Tooltip')).toBeTruthy();
	});

	// TODO: Add tests for Tooltip component
	// on:click

	// EXAMPLE:
	// test('減算処理', async () => {
	// 	render(Counter);
	// 	const decreaseTooltip = screen.getByLabelText('減算');
	// 	await fireEvent.click(decreaseTooltip);
	// 	const counter = await screen.findByText('-1');
	// 	expect(counter).toBeTruthy();
	// });
	// test('加算処理', async () => {
	// 	render(Counter);
	// 	const increaseTooltip = screen.getByLabelText('加算');
	// 	await fireEvent.click(increaseTooltip);
	// 	const counter = await screen.findByText('1');
	// 	expect(counter).toBeTruthy();
	// });
});
