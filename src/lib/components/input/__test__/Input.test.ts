import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import user from '@testing-library/user-event';
import Input from '../Input.svelte';

describe('Input component', async () => {
	test('should render', async () => {
		render(Input);
		expect(screen.getByRole('textbox')).toBeTruthy();
	});

	//placeholder
	test('should render input placeholder correctly', async () => {
		render(Input, { placeholder: 'Placeholder is here' });
		expect(screen.getByPlaceholderText('Placeholder is here')).toBeTruthy();
	});

	//animation
	test('should turn animation on', async () => {
		const userInpput = render(Input, { animation: true });
		expect(userInpput.getByRole('textbox').classList.contains('animation')).toBeTruthy();
	});

	//id
	test('should render Input id correctly', async () => {
		render(Input, { id: 'input_id' });
		expect(screen.getByRole('textbox').getAttribute('id')).toBe('input_id');
	});

	// variant
	test('should have correct variant for primary', () => {
		const userInpput = render(Input, { variant: 'primary' });
		expect(
			userInpput.getByRole('textbox').classList.contains('focus-visible:border-blue-500')
		).toBeTruthy();
	});

	test('should have correct variant for secondary', () => {
		const userInpput = render(Input, { variant: 'secondary' });
		expect(
			userInpput.getByRole('textbox').classList.contains('focus-visible:border-neutral-500')
		).toBeTruthy();
	});

	test('should have correct variant for success', () => {
		const userInpput = render(Input, { variant: 'success' });
		expect(
			userInpput.getByRole('textbox').classList.contains('focus-visible:border-green-500')
		).toBeTruthy();
	});

	test('should have correct variant for warning', () => {
		const userInpput = render(Input, { variant: 'warning' });
		expect(
			userInpput.getByRole('textbox').classList.contains('focus-visible:border-yellow-500')
		).toBeTruthy();
	});

	test('should have correct variant for danger', () => {
		const userInpput = render(Input, { variant: 'danger' });
		expect(
			userInpput.getByRole('textbox').classList.contains('focus-visible:border-red-500')
		).toBeTruthy();
	});

	// rounded
	test('should have correct roundness for none', () => {
		const input = render(Input, { rounded: 'none' });
		expect(input.getByRole('textbox').classList.contains('rounded-none')).toBeTruthy();
	});
	test('should have correct roundness for sm', () => {
		const input = render(Input, { rounded: 'sm' });
		expect(input.getByRole('textbox').classList.contains('rounded-sm')).toBeTruthy();
	});
	test('should have correct roundness for md', () => {
		const input = render(Input, { rounded: 'md' });
		expect(input.getByRole('textbox').classList.contains('rounded-md')).toBeTruthy();
	});
	test('should have correct roundness for lg', () => {
		const input = render(Input, { rounded: 'lg' });
		expect(input.getByRole('textbox').classList.contains('rounded-lg')).toBeTruthy();
	});
	test('should have correct roundness for full', () => {
		const input = render(Input, { rounded: 'full' });
		expect(input.getByRole('textbox').classList.contains('rounded-full')).toBeTruthy();
	});

	// size
	test('should have correct size for sm', () => {
		const userInpput = render(Input, { size: 'sm' });
		expect(userInpput.getByRole('textbox').classList.contains('h-8')).toBeTruthy();
	});

	test('should have correct size for md', () => {
		const userInpput = render(Input, { size: 'md' });
		expect(userInpput.getByRole('textbox').classList.contains('h-10')).toBeTruthy();
	});

	test('should have correct size for lg', async () => {
		const userInpput = render(Input, { size: 'lg' });

		expect(userInpput.getByRole('textbox').classList.contains('h-12')).toBeTruthy();
	});

	//required
	// TODO:
	test('should turn required on', async () => {
		//const button = render(Input, { required: true});
		//expect(button.getByRole('textbox').getAttribute('required')).toBeTruthy();
	});

	test('should not have required', async () => {
		const userInpput = render(Input, { required: false });
		expect(userInpput.getByRole('textbox').getAttribute('required')).toBeFalsy();
	});

	//disabled
	test('should have disabled attribute set to true', async () => {
		const userInpput = render(Input, { disabled: true });
		expect(userInpput.getByRole('textbox').getAttribute('aria-disabled')).toBe('true');
	});

	test('should not have disabled attribute set to false', async () => {
		const userInpput = render(Input, { disabled: false });
		expect(userInpput.getByRole('textbox').getAttribute('aria-disabled')).toBe('false');
	});

	//readonly
	test('should have readonly attribute set to true', async () => {
		const userInpput = render(Input, { readonly: true });

		expect(userInpput.getByRole('textbox').getAttribute('aria-readonly')).toBe('true');
	});

	test('should have readonly attribute set to false', async () => {
		const userInpput = render(Input, { readonly: false });

		expect(userInpput.getByRole('textbox').getAttribute('aria-readonly')).toBe('false');
	});

	//clearable
	test('should turn clearable button on', async () => {
		const userInpput = render(Input, { clearable: true });
		expect(
			userInpput.getByRole('textbox').classList.contains('focus-visible:outline-0')
		).toBeTruthy();
	});

	//maxCount
	test('only show the maxcount even the input exceeds the maxCount will not show up', async () => {
		const userInpput = render(Input, { maxCount: 3 });
		await user.click(userInpput.getByRole('textbox'));
		await user.keyboard('fooo');
		expect(userInpput.getByDisplayValue('foo')).toBeTruthy();
	});

	//invalid
	test('should turn invalid on', async () => {
		const userInpput = render(Input, { invalid: true });
		expect(
			userInpput.getByRole('textbox').classList.contains('focus-visible:border-red-500')
		).toBeTruthy();
	});

	test('should turn invalid off', async () => {
		const userInpput = render(Input, { invalid: false });
		expect(userInpput.getByRole('textbox').getAttribute('invalid')).toBeFalsy();
	});

	//invalidText
	test('should render input invalidText correctly', async () => {
		render(Input, { invalid: true, invalidText: 'This is invalid text' });
		expect(screen.getByText('This is invalid text')).toBeTruthy();
	});

	// TODO:
	//value

	// TODO: Add tests for Button component
	// on:click
});
