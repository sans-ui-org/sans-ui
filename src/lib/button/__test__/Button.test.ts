import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Button } from '$lib';

describe('Button component', async () => {
	test('should render', async () => {
		render(Button);
		expect(screen.getByRole('button')).toBeTruthy();
	});

	// variant
	test('should have correct variant for primary', () => {
		const button = render(Button, { variant: 'primary' });
		expect(button.getByRole('button').classList.contains('bg-blue-500')).toBeTruthy();
	});

	test('should have correct variant for secondary', () => {
		const button = render(Button, { variant: 'secondary' });
		expect(button.getByRole('button').classList.contains('bg-neutral-500')).toBeTruthy();
	});

	test('should have correct variant for success', () => {
		const button = render(Button, { variant: 'success' });
		expect(button.getByRole('button').classList.contains('bg-green-500')).toBeTruthy();
	});

	test('should have correct variant for warining', () => {
		const button = render(Button, { variant: 'warning' });
		expect(button.getByRole('button').classList.contains('bg-yellow-500')).toBeTruthy();
	});

	test('should have correct variant for danger', () => {
		const button = render(Button, { variant: 'danger' });
		expect(button.getByRole('button').classList.contains('bg-red-500')).toBeTruthy();
	});

	// size
	test('should have correct size for sm', () => {
		const button = render(Button, { size: 'sm' });
		expect(button.getByRole('button').classList.contains('text-sm')).toBeTruthy();
	});

	test('should have correct size for md', () => {
		const button = render(Button, { size: 'md' });
		expect(button.getByRole('button').classList.contains('text-base')).toBeTruthy();
	});

	test('should have correct size for lg', () => {
		const button = render(Button, { size: 'lg' });
		expect(button.getByRole('button').classList.contains('text-lg')).toBeTruthy();
	});

});
