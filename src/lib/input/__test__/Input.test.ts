import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import user from '@testing-library/user-event';
import { Input } from '$lib';

describe('Input component', async () => {
	test('should render', async () => {
		render(Input);
		expect(screen.getByRole('textbox')).toBeTruthy();
	});

	test('should render input label correctly', async () => {
		render(Input, { label: 'Label is here' });
		expect(screen.getByText('Label is here')).toBeTruthy();
	});

	//placeholder
	test('should render input placeholder correctly', async () => {
		render(Input, { label: 'Placeholder is here' });
		expect(screen.getByText('Placeholder is here')).toBeTruthy();
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

	// size
	test('should have correct size for sm', () => {
		const userInpput = render(Input, { size: 'sm' });
		expect(userInpput.getByRole('textbox').classList.contains('h-10')).toBeTruthy();
	});

	test('should have correct size for md', () => {
		const userInpput = render(Input, { size: 'md' });
		expect(userInpput.getByRole('textbox').classList.contains('h-12')).toBeTruthy();
	});

	test('should have correct size for lg', () => {
		const userInpput = render(Input, { size: 'lg' });

		expect(userInpput.getByRole('textbox').classList.contains('h-14')).toBeTruthy();
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
		expect(userInpput.getByRole('textbox').classList.contains('focus:outline-0')).toBeTruthy();
		//expect(button.getByRole('textbox').classList.contains('focus:outline-0  focus:border-2')).toBeTruthy();
	});

	//maxCount
	test('should display correct maxCount and show the number of digits that a user entered as long as it does exceed the limit', async () => {
		const userInpput = render(Input, { maxCount: 12 });
		await user.click(userInpput.getByRole('textbox'));
		await user.keyboard('foo');
		expect(userInpput.getByText('3/12')).toBeTruthy();
	});

	test('only show the maxcount even the input exceeds the maxCount will not show up', async () => {
		const userInpput = render(Input, { maxCount: 1 });
		await user.click(userInpput.getByRole('textbox'));
		await user.keyboard('foo');
		expect(userInpput.getByText('1/1')).toBeTruthy();
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
		render(Input, { label: 'This is invalid text' });
		expect(screen.getByText('This is invalid text')).toBeTruthy();
	});

	// TODO:
	//value

	// TODO:
	//startContent

	// TODO:
	//endContent

	// TODO: Add tests for Button component
	// on:click

});
