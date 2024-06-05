import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Switch } from '$lib';

describe('Switch component', async () => {
	test('should render', async () => {
		render(Switch);
		expect(screen.getByRole('switch')).toBeTruthy();
	});

	test('should render button label correctly', async () => {
		render(Switch, { label: 'Switch' });
		expect(screen.getByText('Switch')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const button = render(Switch, { disabled: true });

		expect(button.getByRole('switch').getAttribute('disabled')).toBe('true');
	});

	test('should have readonly attribute', () => {
		const button = render(Switch, { readonly: true });

		expect(button.getByRole('switch').getAttribute('readonly')).toBe('submit');
	});

	// TODO: Add tests for Switch component
	// on:click

	// EXAMPLE:
	// test('減算処理', async () => {
	// 	render(Counter);
	// 	const decreaseSwitch = screen.getByLabelText('減算');
	// 	await fireEvent.click(decreaseSwitch);
	// 	const counter = await screen.findByText('-1');
	// 	expect(counter).toBeTruthy();
	// });
	// test('加算処理', async () => {
	// 	render(Counter);
	// 	const increaseSwitch = screen.getByLabelText('加算');
	// 	await fireEvent.click(increaseSwitch);
	// 	const counter = await screen.findByText('1');
	// 	expect(counter).toBeTruthy();
	// });
});
