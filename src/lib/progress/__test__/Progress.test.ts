import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Progress } from '$lib';

describe('Progress component', async () => {
	test('should render', async () => {
		render(Progress);
		expect(screen.getByRole('progressbar')).toBeTruthy();
	});

	test('should render progress label correctly', async () => {
		render(Progress, { customInnerLabel: 'Loading...' });
		expect(screen.getByText('Loading...')).toBeTruthy();
	});

	//value
	test('should have correct value when the value is not greater than 100', () => {
		render(Progress, { value: 40 });
		expect(screen.getByText('40%')).toBeTruthy();
	});

	test('should have correct value when the value is greater than 100', () => {
		render(Progress, { value: 110 });
		expect(screen.getByText('100%')).toBeTruthy();
	});

	//variant
	test('should have correct variant for primary', () => {
		render(Progress, { variant: 'primary' });
		expect(screen.getByTestId('bottom-circle').classList.contains('stroke-blue-500'));
	});
	test('should have correct variant for secondary', () => {
		render(Progress, { variant: 'secondary' });
		expect(screen.getByTestId('bottom-circle').classList.contains('stroke-neutral-500'));
	});
	test('should have correct variant for success', () => {
		render(Progress, { variant: 'success' });
		expect(screen.getByTestId('bottom-circle').classList.contains('stroke-green-500'));
	});
	test('should have correct variant for warning', () => {
		render(Progress, { variant: 'warning' });
		expect(screen.getByTestId('bottom-circle').classList.contains('stroke-yellow-500'));
	});
	test('should have correct variant for danger', () => {
		render(Progress, { variant: 'danger' });
		expect(screen.getByTestId('bottom-circle').classList.contains('stroke-red-500'));
	});

	//size
	test('should have correct size', () => {
		render(Progress, { size: 100 });
		expect(screen.getByTestId('bottom-circle').getAttribute('cx')).toBe('50');
	});

	//trackWidth
	test('should have correct trackWidth', () => {
		render(Progress, { trackWidth: 100 });
		expect(screen.getByTestId('bottom-circle').getAttribute('stroke-width')).toBe('100');
	});

	//customInnerLabel
	test('should render Progress label correctly', async () => {
		render(Progress, { customInnerLabel: 'Label is here' });
		expect(screen.getByText('Label is here')).toBeTruthy();
	});

});
