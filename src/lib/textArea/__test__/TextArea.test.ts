import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
//import user from '@testing-library/user-event';
import { TextArea } from '$lib';

describe('TextArea component', async () => {
	test('should render', async () => {
		render(TextArea);
		expect(screen.getByRole('textbox')).toBeTruthy();
	});

	//label
	test('should render textarea label correctly', async () => {
		render(TextArea, { label: 'Label' });
		expect(screen.getByText('Label')).toBeTruthy();
	});

	//placeholder
	test('should render input placeholder correctly', async () => {
		render(TextArea, { label: 'Placeholder is here' });
		expect(screen.getByText('Placeholder is here')).toBeTruthy();
	});

	//disabled
	test('should have disabled attribute', async () => {
		const userTextarea = render(TextArea, { disabled: true });
		expect(userTextarea.getByRole('textbox').getAttribute('aria-disabled')).toBe('true');
	});

	//readonly
	test('should have readonly attribute', async () => {
		const userTextarea = render(TextArea, { readonly: true });
		expect(userTextarea.getByRole('textbox').getAttribute('aria-readonly')).toBe('true');
	});

	//invalid
	test('should have invalid attribute', async () => {
		const userTextarea = render(TextArea, { invalid: true });
		expect(userTextarea.getByRole('textbox').getAttribute('aria-invalid')).toBe('true');
	});

	//id
	test('should render TextArea id correctly', async () => {
		render(TextArea, { id: 'textArea_id' });
		expect(screen.getByRole('textbox').getAttribute('id')).toBe('textArea_id');
	});

	// TODO:
	//value

	//variant
	test('should have correct variant for primary', () => {
		const userTextarea = render(TextArea, { variant: 'primary' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-blue-500')
		).toBeTruthy();
	});

	test('should have correct variant for secondary', () => {
		const userTextarea = render(TextArea, { variant: 'secondary' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-neutral-500')
		).toBeTruthy();
	});

	test('should have correct variant for success', () => {
		const userTextarea = render(TextArea, { variant: 'success' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-green-500')
		).toBeTruthy();
	});

	test('should have correct variant for warning', () => {
		const userTextarea = render(TextArea, { variant: 'warning' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-yellow-500')
		).toBeTruthy();
	});

	test('should have correct variant danger', () => {
		const userTextarea = render(TextArea, { variant: 'danger' });
		expect(
			userTextarea.getByRole('textbox').classList.contains('focus-visible:border-red-500')
		).toBeTruthy();
	});

	//size
	test('should have correct size for sm', () => {
		const userTextarea = render(TextArea, { size: 'sm' });
		expect(userTextarea.getByRole('textbox').classList.contains('text-xs')).toBeTruthy();
	});

	test('should have correct size for md', () => {
		const userTextarea = render(TextArea, { size: 'md' });
		expect(userTextarea.getByRole('textbox').classList.contains('text-sm')).toBeTruthy();
	});

	test('should have correct size for lg', () => {
		const userTextarea = render(TextArea, { size: 'lg' });
		expect(userTextarea.getByRole('textbox').classList.contains('text-base')).toBeTruthy();
	});

	//invalidText
	test('should render invalid text correctly', async () => {
		render(TextArea, { label: 'This is invalid text' });
		expect(screen.getByText('This is invalid text')).toBeTruthy();
	});

	//rows
	test('should render the number of rows correctly', async () => {
		const userTextarea = render(TextArea, { row: '5' });
		expect(userTextarea.getByRole('textbox').getAttribute('row')).toBe('5');
	});

	//animation
	test('should turn animation on', async () => {
		const userTextarea = render(TextArea, { animation: true });
		expect(userTextarea.getByRole('textbox').classList.contains('animation')).toBeTruthy();
	});

	//required
	// TODO:

	//maxCount
	test('should display correct maxCount and show the number of digits that a user entered as long as it does exceed the limit', async () => {
		const user = userEvent.setup();
		const userTextarea = render(TextArea, { maxCount: 10 });
		await user.click(userTextarea.getByRole('textbox'));
		await user.keyboard('qqq');
		expect(screen.getByText('3/10')).toBeTruthy();
	});
});
