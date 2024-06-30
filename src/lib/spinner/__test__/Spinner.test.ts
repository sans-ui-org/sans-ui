import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Spinner } from '$lib';

describe('Spinner component', async () => {
	test('should render', async () => {
		render(Spinner);
		expect(screen.getByRole('alert')).toBeTruthy();
	});

	test('should render spinner type 1', async () => {
		render(Spinner);
		expect(screen.getByRole('alert').classList.contains('spinner-type-1')).toBeTruthy();
	});

	test('should render spinner type 2', async () => {
		render(Spinner, { kind: 'loader2' });
		expect(screen.getByRole('alert').classList.contains('spinner-type-2')).toBeTruthy();
	});

	test('should render spinner type 3', async () => {
		render(Spinner, { kind: 'loader3' });
		expect(screen.getByRole('alert').classList.contains('spinner-type-3')).toBeTruthy();
	});
	// TODO: Add tests for Spinner component
	// EXAMPLE:
	// test('減算処理', async () => {
	// 	render(Counter);
	// 	const decreaseSpinner = screen.getByLabelText('減算');
	// 	await fireEvent.click(decreaseSpinner);
	// 	const counter = await screen.findByText('-1');
	// 	expect(counter).toBeTruthy();
	// });
	// test('加算処理', async () => {
	// 	render(Counter);
	// 	const increaseSpinner = screen.getByLabelText('加算');
	// 	await fireEvent.click(increaseSpinner);
	// 	const counter = await screen.findByText('1');
	// 	expect(counter).toBeTruthy();
	// });
});
