import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import LinkTest from './examples/LinkTest.svelte';

describe('Input component', async () => {
	test('should render', async () => {
		render(LinkTest);
		expect(screen.getByRole('link')).toBeTruthy();
	});

	test('should have disabled attribute', async () => {
		render(LinkTest, { disabled: true });
		expect(screen.getByRole('link', { hidden: true }).getAttribute('aria-disabled')).toBe('true');
	});
});
