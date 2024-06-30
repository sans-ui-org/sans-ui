import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { TextArea } from '$lib';

describe('TextArea component', async () => {
	test('should render', async () => {
		render(TextArea);
		expect(screen.getByRole('textbox')).toBeTruthy();
	});

	test('should render textarea label correctly', async () => {
		render(TextArea, { label: 'Label' });
		expect(screen.getByText('Label')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const textarea = render(TextArea, { disabled: true });

		expect(textarea.getByRole('textbox').getAttribute('aria-disabled')).toBe('true');
	});

	test('should have readonly attribute', async () => {
		const textarea = render(TextArea, { readonly: true });

		expect(textarea.getByRole('textbox').getAttribute('aria-readonly')).toBe('true');
	});

	test('should have invalid attribute', async () => {
		const textarea = render(TextArea, { invalid: true });

		expect(textarea.getByRole('textbox').getAttribute('aria-invalid')).toBe('true');
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
