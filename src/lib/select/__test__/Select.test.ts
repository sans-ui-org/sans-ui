import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Select } from '$lib';
import user from '@testing-library/user-event';

describe('Select component', async () => {
	test('should render', async () => {
		render(Select);
		expect(screen.getByRole('combobox')).toBeTruthy();
	});

	/*
	test('should render select label correctly', async () => {
		render(Select);
		user.selectOptions(screen.getByRole('option'), ["1"])
		//expect(screen.getByTestId('opt1').getAttribute("aria-selected")).toBe(false)
		//expect(screen.getByRole('combobox', { name: /select_id/i })).toBeTruthy();
	});
	*/

	test('should render select label correctly', async () => {
		render(Select, { id: 'select_id' });
		expect(screen.getByRole('combobox', { name: /select_id/i })).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const select = render(Select, { id: 'select_id', disabled: true });

		expect(select.getByRole('combobox', { name: /select_id/i }).getAttribute('aria-disabled')).toBe(
			'true'
		);
	});

	//id
	test('should render Select id correctly', async () => {
		render(Select, { id: 'Selectt_id' });
		expect(screen.getByRole('combobox').getAttribute('id')).toBe('Selectt_id');
	});

	//size
	test('should have correct Size of the select box', () => {
		const selectBox = render(Select, { size: 'sm' });
		expect(selectBox.getByRole('button').classList.contains('h-8')).toBeTruthy();
	});
	test('should have correct Size of the select box', () => {
		const selectBox = render(Select, { size: 'md' });
		expect(selectBox.getByRole('button').classList.contains('h-10')).toBeTruthy();
	});
	test('should have correct Size of the select box', () => {
		const selectBox = render(Select, { size: 'lg' });
		expect(selectBox.getByRole('button').classList.contains('h-12')).toBeTruthy();
	});

	//variant
	test('should have correct variant', () => {
		const selectBox = render(Select, { variant: 'primary' });
		expect(
			selectBox.getByRole('button').classList.contains('focus-visible:outline-blue-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Select, { variant: 'secondary' });
		expect(
			button.getByRole('button').classList.contains('focus-visible:outline-gray-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Select, { variant: 'danger' });
		expect(
			button.getByRole('button').classList.contains('focus-visible:outline-red-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Select, { variant: 'warning' });
		expect(
			button.getByRole('button').classList.contains('focus-visible:outline-yellow-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Select, { variant: 'success' });
		expect(
			button.getByRole('button').classList.contains('focus-visible:outline-green-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const button = render(Select, { variant: '' });
		expect(
			button.getByRole('button').classList.contains('focus-visible:outline-gray-500')
		).toBeTruthy();
	});

	//defaultSelected
	test('should have default Selected option when the defaultSelected is setup', () => {
		render(Select, { defaultSelected: { value: '2', label: 'Option 2' } });
		render(Select, {
			options: [
				{ value: '1', label: 'Option 1' },
				{ value: '2', label: 'Option 2' },
				{ value: '3', label: 'Option 3' }
			]
		});
		expect(screen.getByText('Option 2')).toBeTruthy();
	});

	//disabled
	test('should have disabled attribute', async () => {
		const button = render(Select, { disabled: true });
		expect(button.getByRole('button').getAttribute('aria-disabled')).toBe('true');
	});

	test('should have disabled attribute', async () => {
		const button = render(Select, { disabled: false });
		expect(button.getByRole('button').getAttribute('aria-disabled')).toBe('false');
	});

	//readonly
	test('should have readonly attribute', async () => {
		const button = render(Select, { readonly: true });
		expect(button.getByRole('combobox').getAttribute('aria-readonly')).toBe('true');
	});

	test('should have readonly attribute', async () => {
		const button = render(Select, { readonly: false });
		expect(button.getByRole('combobox').getAttribute('aria-readonly')).toBe('false');
	});

	//TODO: required
	test('should turn required on', async () => {
		//const button = render(Select, { required: true});
		//expect(button.getByRole('textbox').getAttribute('required')).toBeTruthy();
	});

	test('should not have required', async () => {
		const button = render(Select, { required: false });
		expect(button.getByRole('combobox').getAttribute('required')).toBeFalsy();
	});

	//TODO: animation
	// code is not working

	//invalid
	test('should turn invalid on', async () => {
		const button = render(Select, { invalid: true });
		expect(button.getByRole('combobox').getAttribute('aria-invalid')).toBe('true');
	});

	test('should turn invalid off', async () => {
		const button = render(Select, { invalid: false });
		expect(button.getByRole('combobox').getAttribute('aria-invalid')).toBe('false');
	});

	//invalidText
	test('should render invalid text correctly', async () => {
		render(Select, { label: 'This is invalid text' });
		expect(screen.getByText('This is invalid text')).toBeTruthy();
	});

	// TODO: Add tests for Select component
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
