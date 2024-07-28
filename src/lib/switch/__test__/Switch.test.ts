import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Switch } from '$lib';
import userEvent from '@testing-library/user-event';

describe('Switch component', async () => {
	test('should render', async () => {
		render(Switch);
		expect(screen.getByRole('switch')).toBeTruthy();
	});

	//label
	test('should render swtich label correctly', async () => {
		render(Switch, { label: 'Switch' });
		expect(screen.getByText('Switch')).toBeTruthy();
	});

	//textForOn
	test('should have correct text when the switch is on', async () => {
		render(Switch, { textForOn: 'I am on' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		const labelText = screen.getByTestId('label-text').innerHTML;
		expect(labelText).toBe('I am on');
	});

	//textForOff
	test('should have correct text when the switch is off', async () => {
		render(Switch, { textForOff: 'I am off' });
		const labelText = screen.getByTestId('label-text').innerHTML;
		expect(labelText).toBe('I am off');
	});

	//variant
	test('should have correct variant for primary', async () => {
		render(Switch, { variant: 'primary' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-blue-500')).toBeTruthy();
	});
	test('should have correct variant for secondary', async () => {
		render(Switch, { variant: 'secondary' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-neutral-500')).toBeTruthy();
	});
	test('should have correct variant for success', async () => {
		render(Switch, { variant: 'success' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-green-500')).toBeTruthy();
	});
	test('should have correct variant for warning', async () => {
		render(Switch, { variant: 'warning' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-yellow-500')).toBeTruthy();
	});
	test('should have correct variant for danger', async () => {
		render(Switch, { variant: 'danger' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-red-500')).toBeTruthy();
	});

	//id
	test('should render Switch id correctly', async () => {
		render(Switch, { id: 'switch_id' });
		expect(screen.getByRole('switch').getAttribute('id')).toBe('switch_id');
	});

	//size
	test('should have correct Switch Size for sm', () => {
		const switchButton = render(Switch, { size: 'sm' });
		expect(switchButton.getByRole('switch').classList.contains('w-[40px]')).toBeTruthy();
	});
	test('should have correct Switch Size for md', () => {
		const switchButton = render(Switch, { size: 'md' });
		expect(switchButton.getByRole('switch').classList.contains('w-[60px]')).toBeTruthy();
	});
	test('should have correct Switch Size for lg', () => {
		const switchButton = render(Switch, { size: 'lg' });
		expect(switchButton.getByRole('switch').classList.contains('w-[80px]')).toBeTruthy();
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

	// TODO:invalid
	// not working?

	// TODO: invalidText
	// not working?

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
