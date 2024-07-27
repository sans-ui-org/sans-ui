import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Checkbox } from '$lib';

describe('Checkbox component', async () => {
	test('should render Checkbox component', async () => {
		render(Checkbox);
		expect(screen.getByRole('checkbox')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		const checkbox = render(Checkbox, { disabled: true });

		expect(checkbox.getByRole('checkbox').getAttribute('aria-disabled')).toBe('true');
	});

	test('should have checked attribute', async () => {
		const checkbox = render(Checkbox, { disabled: false });

		expect(checkbox.getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
	});
});

//indeterminate
//describe('Checkbox indeterminate', async () => {
//});

describe('Checkbox variant', async () => {
	test('should have correct variant', () => {
		render(Checkbox, { variant: 'primary' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('fill-blue-500')).toBeTruthy();
	});
	test('should have correct variant', () => {
		render(Checkbox, { variant: 'secondary' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('fill-neutral-500')).toBeTruthy();
	});
	test('should have correct variant', () => {
		render(Checkbox, { variant: 'success' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('fill-green-500')).toBeTruthy();
	});
	test('should have correct variant', () => {
		render(Checkbox, { variant: 'warning' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('fill-yellow-500')).toBeTruthy();
	});
	test('should have correct variant', () => {
		render(Checkbox, { variant: 'danger' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('fill-red-500')).toBeTruthy();
	});
});

describe('Checkbox size', async () => {
	test('should have correct size', () => {
		render(Checkbox, { size: 'sm' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('w-5')).toBeTruthy();
	});
	test('should have correct size', () => {
		render(Checkbox, { size: 'md' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('w-7')).toBeTruthy();
	});
	test('should have correct size', () => {
		render(Checkbox, { size: 'lg' });
		expect(screen.getByTestId('checkbox-svg').classList.contains('w-9')).toBeTruthy();
	});
});

//label

//value

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
		const CheckboxInpput = render(Checkbox, { defaultChecked: true });
		expect(CheckboxInpput.getByRole('checkbox').getAttribute('aria-checked')).toBe('true');
	});
	test('should have aria-checked set to false when disabled is false', async () => {
		const CheckboxInpput = render(Checkbox, { defaultChecked: false });
		expect(CheckboxInpput.getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
	});
});

describe('Checkbox animation', async () => {
	test('should have animation effect when animation set to true', () => {
		render(Checkbox, { animation: 'true' });
		expect(
			screen.getByTestId('checkbox-svg-polyline').classList.contains('animation')
		).toBeTruthy();
	});
});
