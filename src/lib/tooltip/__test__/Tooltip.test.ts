import { describe, expect, test } from 'vitest';
import { Tooltip } from '$lib';
import TooltipTest from './examples/TooltipTest.svelte';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

describe('Tooltip component', async () => {
	test('should render trigger', async () => {
		render(Tooltip);
		expect(screen.getByRole('button')).toBeTruthy();
	});

	test('should render tooltip', async () => {
		render(TooltipTest);
		const trigger = screen.getByRole('button');

		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip')).toBeTruthy();
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
