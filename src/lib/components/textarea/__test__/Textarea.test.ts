import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
//import user from '@testing-library/user-event';
import { Textarea } from '$lib';

describe('Textarea component', async () => {
	test('should render', async () => {
		render(Textarea);
		expect(screen.getByRole('textbox')).toBeTruthy();
	});

	//placeholder
	test('should render input placeholder correctly', async () => {
		render(Textarea, { placeholder: 'Placeholder is here' });
		expect(screen.getByPlaceholderText('Placeholder is here')).toBeTruthy();
	});

	//disabled
	test('should have disabled attribute', async () => {
		const userTextarea = render(Textarea, { disabled: true });
		expect(userTextarea.getByRole('textbox').getAttribute('aria-disabled')).toBe('true');
	});

	//readonly
	test('should have readonly attribute', async () => {
		const userTextarea = render(Textarea, { readonly: true });
		expect(userTextarea.getByRole('textbox').getAttribute('aria-readonly')).toBe('true');
	});

	//invalid
	test('should have invalid attribute', async () => {
		const userTextarea = render(Textarea, { invalid: true });
		expect(userTextarea.getByRole('textbox').getAttribute('aria-invalid')).toBe('true');
	});

	//id
	test('should render Textarea id correctly', async () => {
		render(Textarea, { id: 'textArea_id' });
		expect(screen.getByRole('textbox').getAttribute('id')).toBe('textArea_id');
	});

	// TODO:
	//value

	//variant
	test('should have correct variant for primary', () => {
		const userTextarea = render(Textarea, { variant: 'primary' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-blue-500')
		).toBeTruthy();
	});

	test('should have correct variant for secondary', () => {
		const userTextarea = render(Textarea, { variant: 'secondary' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-neutral-500')
		).toBeTruthy();
	});

	test('should have correct variant for success', () => {
		const userTextarea = render(Textarea, { variant: 'success' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-green-500')
		).toBeTruthy();
	});

	test('should have correct variant for warning', () => {
		const userTextarea = render(Textarea, { variant: 'warning' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-yellow-500')
		).toBeTruthy();
	});

	test('should have correct variant danger', () => {
		const userTextarea = render(Textarea, { variant: 'danger' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-red-500')
		).toBeTruthy();
	});

	//size
	test('should have correct size for sm', () => {
		const userTextarea = render(Textarea, { size: 'sm' });
		expect(userTextarea.getByRole('textbox').classList.contains('text-sm')).toBeTruthy();
	});

	test('should have correct size for md', () => {
		const userTextarea = render(Textarea, { size: 'md' });
		expect(userTextarea.getByRole('textbox').classList.contains('text-sm')).toBeTruthy();
	});

	test('should have correct size for lg', () => {
		const userTextarea = render(Textarea, { size: 'lg' });
		expect(userTextarea.getByRole('textbox').classList.contains('text-base')).toBeTruthy();
	});

	// rounded
	test('should have correct roundness for none', () => {
		const textarea = render(Textarea, { rounded: 'none' });
		expect(textarea.getByRole('textbox').classList.contains('rounded-none')).toBeTruthy();
	});
	test('should have correct roundness for sm', () => {
		const textarea = render(Textarea, { rounded: 'sm' });
		expect(textarea.getByRole('textbox').classList.contains('rounded-sm')).toBeTruthy();
	});
	test('should have correct roundness for md', () => {
		const textarea = render(Textarea, { rounded: 'md' });
		expect(textarea.getByRole('textbox').classList.contains('rounded-md')).toBeTruthy();
	});
	test('should have correct roundness for lg', () => {
		const textarea = render(Textarea, { rounded: 'lg' });
		expect(textarea.getByRole('textbox').classList.contains('rounded-lg')).toBeTruthy();
	});
	test('should have correct roundness for full', () => {
		const textarea = render(Textarea, { rounded: 'full' });
		expect(textarea.getByRole('textbox').classList.contains('rounded-2xl')).toBeTruthy();
	});

	//invalidText
	test('should render invalid text correctly', async () => {
		render(Textarea, { invalid: true, invalidText: 'This is invalid text' });
		expect(screen.getByText('This is invalid text')).toBeTruthy();
	});

	//rows
	test('should render the number of rows correctly', async () => {
		const userTextarea = render(Textarea, { rows: 5 });
		expect(userTextarea.getByRole('textbox').getAttribute('rows')).toBe('5');
	});

	//animation
	test('should turn animation on', async () => {
		const userTextarea = render(Textarea, { animation: true });
		expect(userTextarea.getByRole('textbox').classList.contains('duration-300')).toBeTruthy();
	});

	//required
	// TODO:

	//maxCount
	test('should display correct maxCount and show the number of digits that a user entered as long as it does exceed the limit', async () => {
		const user = userEvent.setup();
		const userTextarea = render(Textarea, { maxCount: 5 });
		await user.click(userTextarea.getByRole('textbox'));
		await user.keyboard('hello world');

		expect(screen.getByDisplayValue('hello')).toBeTruthy();
	});
});
