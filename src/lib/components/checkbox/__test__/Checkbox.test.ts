import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Checkbox } from '$lib';

describe('Checkbox component', async () => {
	test('should render Checkbox component', async () => {
		render(Checkbox);
		expect(screen.getByRole('checkbox')).toBeTruthy();
	});

	test('should have disabled attribute set to true when disabled is true', async () => {
		const checkbox = render(Checkbox, { disabled: true });
		expect(checkbox.getByRole('checkbox').getAttribute('aria-disabled')).toBe('true');
	});

	test('should have aria-checked set to fasle when disabled is false', async () => {
		const checkbox = render(Checkbox, { disabled: false });
		expect(checkbox.getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
	});
});

//TODO: indeterminate
// describe('should Checkbox has indeterminate attribute as true value', async () => {
// 	render(Checkbox, { indeterminate: true });
// 	expect(screen.getByRole('checkbox').indeterminate).toBe(true);
// });

describe('Checkbox variant', async () => {
	test('should have correct variant for primary', () => {
		render(Checkbox, { checked: true, variant: 'primary' });
		expect(screen.getByRole('checkbox').classList.contains('checked:bg-blue-500')).toBeTruthy();
	});
	test('should have correct variant for secodary', () => {
		render(Checkbox, { checked: true, variant: 'secondary' });
		expect(screen.getByRole('checkbox').classList.contains('checked:bg-neutral-500')).toBeTruthy();
	});
	test('should have correct variant for success', () => {
		render(Checkbox, { checked: true, variant: 'success' });
		expect(screen.getByRole('checkbox').classList.contains('checked:bg-green-500')).toBeTruthy();
	});
	test('should have correct variant for warning', () => {
		render(Checkbox, { checked: true, variant: 'warning' });
		expect(screen.getByRole('checkbox').classList.contains('checked:bg-yellow-500')).toBeTruthy();
	});
	test('should have correct variant for danger', () => {
		render(Checkbox, { checked: true, variant: 'danger' });
		expect(screen.getByRole('checkbox').classList.contains('checked:bg-red-500')).toBeTruthy();
	});
});

describe('Checkbox size', async () => {
	test('should have correct size for sm', () => {
		render(Checkbox, { size: 'sm' });
		expect(screen.getByRole('checkbox').classList.contains('w-4')).toBeTruthy();
	});
	test('should have correct size for md', () => {
		render(Checkbox, { size: 'md' });
		expect(screen.getByRole('checkbox').classList.contains('w-5')).toBeTruthy();
	});
	test('should have correct size for lg', () => {
		render(Checkbox, { size: 'lg' });
		expect(screen.getByRole('checkbox').classList.contains('w-6')).toBeTruthy();
	});
});

// value
describe('Checkbox value', async () => {
	test('should have value when value is set', async () => {
		const CheckboxInpput = render(Checkbox, { checked: true, value: 'test' });
		expect(CheckboxInpput.getByRole('checkbox').getAttribute('value')).toBe('test');
	});
});

//disabled
describe('Checkbox disabled', async () => {
	test('should have aria-disabled set to true when disabled is true', async () => {
		const CheckboxInpput = render(Checkbox, { disabled: true });
		expect(CheckboxInpput.getByRole('checkbox').getAttribute('aria-disabled')).toBe('true');
	});
	test('should have aria-disabled set to false when disabled is false', async () => {
		const CheckboxInpput = render(Checkbox, { disabled: false });
		expect(CheckboxInpput.getByRole('checkbox').getAttribute('aria-disabled')).toBe('false');
	});
});

//defaultChecked
describe('Checkbox defaultChecked', async () => {
	test('should have aria-checked set to true when defaultChecked is true', async () => {
		const CheckboxInpput = render(Checkbox, { checked: true });
		expect(CheckboxInpput.getByRole('checkbox').getAttribute('aria-checked')).toBe('true');
	});
	test('should have aria-checked set to false when disabled is false', async () => {
		const CheckboxInpput = render(Checkbox, { checked: false });
		expect(CheckboxInpput.getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
	});
});

describe('Checkbox animation', async () => {
	test('should have animation effect when animation set to true', () => {
		render(Checkbox, { animation: true });
		expect(screen.getByRole('checkbox').classList.contains('animation')).toBeTruthy();
	});
});
