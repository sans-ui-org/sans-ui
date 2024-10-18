import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from '../Button.svelte';

describe('Button component', async () => {
	test('should render', async () => {
		render(Button);
		expect(screen.getByRole('button')).toBeTruthy();
	});

	// kind
	test('should have solid kind', () => {
		const button = render(Button, { kind: 'solid' });
		expect(button.getByRole('button').classList.contains('text-white')).toBeTruthy();
	});
	test('should have bordered kind', () => {
		const button = render(Button, { kind: 'bordered' });
		expect(button.getByRole('button').classList.contains('border-blue-500')).toBeTruthy();
	});
	test('should have shadow kind', () => {
		const button = render(Button, { kind: 'shadow' });
		expect(button.getByRole('button').classList.contains('shadow-lg')).toBeTruthy();
	});
	test('should have flat kind', () => {
		const button = render(Button, { kind: 'flat' });
		expect(button.getByRole('button').classList.contains('text-blue-500')).toBeTruthy();
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
	// rounded
	test('should have correct roundness for none', () => {
		const button = render(Button, { rounded: 'none' });
		expect(button.getByRole('button').classList.contains('rounded-none')).toBeTruthy();
	});
	test('should have correct roundness for sm', () => {
		const button = render(Button, { rounded: 'sm' });
		expect(button.getByRole('button').classList.contains('rounded-sm')).toBeTruthy();
	});
	test('should have correct roundness for md', () => {
		const button = render(Button, { rounded: 'md' });
		expect(button.getByRole('button').classList.contains('rounded-md')).toBeTruthy();
	});
	test('should have correct roundness for lg', () => {
		const button = render(Button, { rounded: 'lg' });
		expect(button.getByRole('button').classList.contains('rounded-lg')).toBeTruthy();
	});
	test('should have correct roundness for full', () => {
		const button = render(Button, { rounded: 'full' });
		expect(button.getByRole('button').classList.contains('rounded-full')).toBeTruthy();
	});

	// animation
	test('should have animation', () => {
		const button = render(Button, { animation: true });
		expect(button.getByRole('button').classList.contains('duration-200')).toBeTruthy();
	});

	// disabled
	test('should have disabled attribute and its style', () => {
		const button = render(Button, { disabled: true });
		expect(button.getByRole('button').classList.contains('cursor-not-allowed')).toBeTruthy();
		expect(button.getByRole('button').getAttribute('disabled')).toBeDefined();
	});
});
