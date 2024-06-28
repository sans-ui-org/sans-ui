import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { TextArea } from '$lib';

describe('TextArea component', async () => {
	test('should render', async () => {
		render(TextArea);
		expect(screen.getByRole('textarea')).toBeTruthy();
	});

	test('should render button label correctly', async () => {
		render(TextArea, { label: 'Label' });
		expect(screen.getByText('Label')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const button = render(TextArea, { disabled: true });

		expect(button.getByRole('textarea').getAttribute('disabled')).toBe('true');
	});

	test('should have readonly attribute', async () => {
		const button = render(TextArea, { readonly: true });

		expect(button.getByRole('textarea').getAttribute('readonly')).toBe('true');
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
