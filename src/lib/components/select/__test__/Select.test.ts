import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import Select from '../Select.svelte';

const options = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' }
];

describe('Select component', async () => {
	test('should render', async () => {
		render(Select);
		expect(screen.getByRole('combobox')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const select = render(Select, { id: 'select_id', options, disabled: true });

		expect(select.getByRole('combobox', { name: /select_id/i }).getAttribute('aria-disabled')).toBe(
			'true'
		);
	});

	//id
	test('should render Select id correctly', async () => {
		render(Select, { id: 'Select_id', options });
		expect(screen.getByRole('combobox').getAttribute('id')).toBe('Select_id');
	});

	//size
	test('should have correct Size of the select box', () => {
		const selectBox = render(Select, { size: 'sm', options });
		expect(selectBox.getByRole('button').classList.contains('h-8')).toBeTruthy();
	});
	test('should have correct Size of the select box', () => {
		const selectBox = render(Select, { size: 'md', options });
		expect(selectBox.getByRole('button').classList.contains('h-10')).toBeTruthy();
	});
	test('should have correct Size of the select box', () => {
		const selectBox = render(Select, { size: 'lg', options });
		expect(selectBox.getByRole('button').classList.contains('h-12')).toBeTruthy();
	});

	//variant
	test('should have correct variant', () => {
		const selectBox = render(Select, { variant: 'primary', options });
		expect(
			selectBox.getByRole('button').classList.contains('focus-visible:outline-blue-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const select = render(Select, { variant: 'secondary', options });
		expect(
			select.getByRole('button').classList.contains('focus-visible:outline-gray-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const select = render(Select, { variant: 'danger', options });
		expect(
			select.getByRole('button').classList.contains('focus-visible:outline-red-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const select = render(Select, { variant: 'warning', options });
		expect(
			select.getByRole('button').classList.contains('focus-visible:outline-yellow-500')
		).toBeTruthy();
	});

	test('should have correct variant', () => {
		const select = render(Select, { variant: 'success', options });
		expect(
			select.getByRole('button').classList.contains('focus-visible:outline-green-500')
		).toBeTruthy();
	});

	// rounded
	test('should have correct roundness for none', () => {
		const select = render(Select, { options, rounded: 'none' });
		expect(select.getByRole('button').classList.contains('rounded-none')).toBeTruthy();
	});
	test('should have correct roundness for sm', () => {
		const select = render(Select, { options, rounded: 'sm' });
		expect(select.getByRole('button').classList.contains('rounded-sm')).toBeTruthy();
	});
	test('should have correct roundness for md', () => {
		const select = render(Select, { options, rounded: 'md' });
		expect(select.getByRole('button').classList.contains('rounded-md')).toBeTruthy();
	});
	test('should have correct roundness for lg', () => {
		const select = render(Select, { options, rounded: 'lg' });
		expect(select.getByRole('button').classList.contains('rounded-lg')).toBeTruthy();
	});
	test('should have correct roundness for full', () => {
		const select = render(Select, { options, rounded: 'full' });
		expect(select.getByRole('button').classList.contains('rounded-full')).toBeTruthy();
	});

	//defaultSelected
	test('should have default Selected option when the defaultSelected is setup', () => {
		render(Select, { options, defaultSelected: { value: '2', label: 'Option 2' } });
		const trigger = screen.getByRole('button');
		expect(within(trigger).getByText('Option 2')).toBeTruthy();
	});

	//disabled
	test('should have disabled attribute set to true', async () => {
		const button = render(Select, { options, disabled: true });
		expect(button.getByRole('button').getAttribute('aria-disabled')).toBe('true');
	});

	test('should have disabled attribute set ti false', async () => {
		const button = render(Select, { options, disabled: false });
		expect(button.getByRole('button').getAttribute('aria-disabled')).toBe('false');
	});

	//readonly
	test('should have readonly attribute set to true', async () => {
		const button = render(Select, { options, readonly: true });
		expect(button.getByRole('combobox').getAttribute('aria-readonly')).toBe('true');
	});

	test('should have readonly attribute set to false', async () => {
		const button = render(Select, { options, readonly: false });
		expect(button.getByRole('combobox').getAttribute('aria-readonly')).toBe('false');
	});

	//TODO: required
	test('should turn required on', async () => {
		//const button = render(Select, { required: true});
		//expect(button.getByRole('textbox').getAttribute('required')).toBeTruthy();
	});

	test('should not have required', async () => {
		// const button = render(Select, { options, required: false });
		// expect(button.getByRole('combobox').getAttribute('required')).toBeFalsy();
	});

	//TODO: animation
	// code is not working
	test('should have animation', async () => {
		const button = render(Select, { options, invalid: true });
		expect(button.getByRole('button').classList.contains('duration-200')).toBeTruthy();
		expect(button.getByRole('menu').classList.contains('duration-200')).toBeTruthy();
	});

	//invalid
	test('should turn invalid on', async () => {
		const button = render(Select, { options, invalid: true });
		expect(button.getByRole('combobox').getAttribute('aria-invalid')).toBe('true');
	});

	test('should turn invalid off', async () => {
		const button = render(Select, { options, invalid: false });
		expect(button.getByRole('combobox').getAttribute('aria-invalid')).toBe('false');
	});

	//invalidText
	test('should render invalid text correctly', async () => {
		render(Select, { options, invalid: true, invalidText: 'This is invalid text' });
		expect(screen.getByRole('combobox').classList.contains('border-red-500')).toBeTruthy();
		expect(screen.getByText('This is invalid text')).toBeTruthy();
	});
});
