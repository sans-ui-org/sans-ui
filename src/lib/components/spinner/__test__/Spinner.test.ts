import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Spinner from '../Spinner.svelte';

describe('Spinner component', async () => {
	test('should render', async () => {
		render(Spinner);
		expect(screen.getByRole('alert')).toBeTruthy();
	});

	// kind
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

	// variant
	test('should have correct variant for primary', () => {
		const spinnerObj = render(Spinner, { variant: 'primary' });
		expect(spinnerObj.getByRole('alert').classList.contains('border-blue-500')).toBeTruthy();
	});
	test('should have correct variant for secondary', () => {
		const spinnerObj = render(Spinner, { variant: 'secondary' });
		expect(spinnerObj.getByRole('alert').classList.contains('border-neutral-500')).toBeTruthy();
	});
	test('should have correct variant for success', () => {
		const spinnerObj = render(Spinner, { variant: 'success' });
		expect(spinnerObj.getByRole('alert').classList.contains('border-green-500')).toBeTruthy();
	});
	test('should have correct variant for warning', () => {
		const spinnerObj = render(Spinner, { variant: 'warning' });
		expect(spinnerObj.getByRole('alert').classList.contains('border-yellow-500')).toBeTruthy();
	});
	test('should have correct variant danger', () => {
		const spinnerObj = render(Spinner, { variant: 'danger' });
		expect(spinnerObj.getByRole('alert').classList.contains('border-red-500')).toBeTruthy();
	});

	// size
	test('should have correct size for sm', () => {
		const spinnerObj = render(Spinner, { size: 'sm' });
		expect(spinnerObj.getByRole('alert').classList.contains('w-[32px]')).toBeTruthy();
	});
	test('should have correct size for md', () => {
		const spinnerObj = render(Spinner, { size: 'md' });
		expect(spinnerObj.getByRole('alert').classList.contains('w-[48px]')).toBeTruthy();
	});
	test('should have correct size for lg', () => {
		const spinnerObj = render(Spinner, { size: 'lg' });
		expect(spinnerObj.getByRole('alert').classList.contains('w-[64px]')).toBeTruthy();
	});
});
