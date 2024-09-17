import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Switch } from '$lib';
import userEvent from '@testing-library/user-event';

describe('Switch component', async () => {
	test('should render', async () => {
		render(Switch);
		expect(screen.getByRole('switch')).toBeTruthy();
	});

	//variant
	test('should have correct variant for primary', async () => {
		render(Switch, { variant: 'primary' });
		const switchButton = screen.getByTestId('sans-ui--switch-chip');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-blue-500')).toBeTruthy();
	});
	test('should have correct variant for secondary', async () => {
		render(Switch, { variant: 'secondary' });
		const switchButton = screen.getByTestId('sans-ui--switch-chip');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-neutral-500')).toBeTruthy();
	});
	test('should have correct variant for success', async () => {
		render(Switch, { variant: 'success' });
		const switchButton = screen.getByTestId('sans-ui--switch-chip');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-green-500')).toBeTruthy();
	});
	test('should have correct variant for warning', async () => {
		render(Switch, { variant: 'warning' });
		const switchButton = screen.getByTestId('sans-ui--switch-chip');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-yellow-500')).toBeTruthy();
	});
	test('should have correct variant for danger', async () => {
		render(Switch, { variant: 'danger' });
		const switchButton = screen.getByTestId('sans-ui--switch-chip');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-red-500')).toBeTruthy();
	});

	//size
	test('should have correct Switch Size for sm', () => {
		render(Switch, { size: 'sm' });
		const base = screen.getByTestId('sans-ui--switch-base');
		expect(base.classList.contains('w-[35px]')).toBeTruthy();
	});
	test('should have correct Switch Size for md', () => {
		render(Switch, { size: 'md' });
		const base = screen.getByTestId('sans-ui--switch-base');
		expect(base.classList.contains('w-[45px]')).toBeTruthy();
	});
	test('should have correct Switch Size for lg', () => {
		render(Switch, { size: 'lg' });
		const base = screen.getByTestId('sans-ui--switch-base');
		expect(base.classList.contains('w-[65px]')).toBeTruthy();
	});

	//readonly
	test('should have readonly attribute', () => {
		const sw = render(Switch, { readonly: true });
		expect(sw.getByRole('switch').getAttribute('aria-readonly')).toBe('true');
	});

	//disabled
	test('should have disabled attribute', async () => {
		const sw = render(Switch, { disabled: true });
		expect(sw.getByRole('switch').getAttribute('aria-disabled')).toBe('true');
	});

	// invalid
	test('should have invalid state', async () => {
		const sw = render(Switch, { invalid: true, invalidText: 'This is invalid.' });
		expect(sw.getByText('This is invalid.')).toBeTruthy();
		expect(sw.getByRole('switch').getAttribute('aria-invalid')).toBe('true');
	});

	// defaultToggled
	test('should have correct aria-disabled attribute when defaultToggled is toggled to true', () => {
		const sw = render(Switch, { defaultToggled: true });
		expect(sw.getByRole('switch').getAttribute('aria-checked')).toBe('true');
	});

	test('should have correct aria-disabled attribute when defaultToggled is toggled to false', () => {
		const sw = render(Switch, { defaultToggled: false });
		expect(sw.getByRole('switch').getAttribute('aria-checked')).toBe('false');
	});
});
