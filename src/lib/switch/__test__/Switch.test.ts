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
	test('should have correct variant', async () => {
		render(Switch, { textForOn: 'I am on' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		const labelText = screen.getByTestId('label-text').innerHTML;
		expect(labelText).toBe('I am on');
	});

	//textForOff
	test('should have correct variant', async () => {
		render(Switch, { textForOff: 'I am off' });
		const labelText = screen.getByTestId('label-text').innerHTML;
		expect(labelText).toBe('I am off');
	});

	//variant
	test('should have correct variant', async () => {
		render(Switch, { variant: 'primary' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-blue-600')).toBeTruthy();
	});
	test('should have correct variant', async () => {
		render(Switch, { variant: 'secondary' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-neutral-600')).toBeTruthy();
	});
	test('should have correct variant', async () => {
		render(Switch, { variant: 'success' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-green-600')).toBeTruthy();
	});
	test('should have correct variant', async () => {
		render(Switch, { variant: 'warning' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-yellow-600')).toBeTruthy();
	});
	test('should have correct variant', async () => {
		render(Switch, { variant: 'danger' });
		const switchButton = screen.getByRole('switch');
		await userEvent.click(switchButton);
		expect(switchButton.classList.contains('bg-red-600')).toBeTruthy();
	});

	//id
	test('should render Switch id correctly', async () => {
		render(Switch, { id: 'switch_id' });
		expect(screen.getByRole('switch').getAttribute('id')).toBe('switch_id');
	});

	//size
	test('should have correct Switch Size', () => {
		const switchButton = render(Switch, { size: 'sm' });
		expect(switchButton.getByRole('switch').classList.contains('w-[40px]')).toBeTruthy();
	});
	test('should have correct Switch Size', () => {
		const switchButton = render(Switch, { size: 'md' });
		expect(switchButton.getByRole('switch').classList.contains('w-[60px]')).toBeTruthy();
	});
	test('should have correct Switch Size', () => {
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
	test('should have correct aria-disabled attribute when defaultToggled is toggled', () => {
		const sw = render(Switch, { defaultToggled: true });
		expect(sw.getByRole('switch').getAttribute('aria-checked')).toBe('true');
	});

	test('should have correct aria-disabled attribute when defaultToggled is toggled', () => {
		const sw = render(Switch, { defaultToggled: false });
		expect(sw.getByRole('switch').getAttribute('aria-checked')).toBe('false');
	});

	// EXAMPLE:
	// test('減算処理', async () => {
	// 	render(Counter);
	// 	const decreaseSwitch = screen.getByLabelText('減算');
	// 	await fireEvent.click(decreaseSwitch);
	// 	const counter = await screen.findByText('-1');
	// 	expect(counter).toBeTruthy();
	// });
	// test('加算処理', async () => {
	// 	render(Counter);
	// 	const increaseSwitch = screen.getByLabelText('加算');
	// 	await fireEvent.click(increaseSwitch);
	// 	const counter = await screen.findByText('1');
	// 	expect(counter).toBeTruthy();
	// });
});
