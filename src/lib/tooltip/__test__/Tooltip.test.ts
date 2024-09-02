import { describe, expect, test } from 'vitest';
import { Tooltip } from '$lib';
import TooltipTest from './examples/TooltipTest.svelte';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

describe('Tooltip component', async () => {
	test('should render trigger', async () => {
		render(Tooltip);
		expect(screen.getByRole('button')).toBeTruthy();
	});

	test('should render tooltip', async () => {
		render(TooltipTest);
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip')).toBeTruthy();
	});

	//title
	test('should show the correct title while a user hovers the tooltip', async () => {
		render(Tooltip, { title: 'This is title' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByText('This is title')).toBeTruthy();
	});

	//size
	test('should show the correct size(sm) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { size: 'sm' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('text-sm')).toBeTruthy();
	});
	test('should show the correct size(md) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { size: 'md' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('text-base')).toBeTruthy();
	});
	test('should show the correct size(lg) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { size: 'lg' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('text-lg')).toBeTruthy();
	});

	//variant
	test('should show the correct variant(primary) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { variant: 'primary' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('bg-blue-500')).toBeTruthy();
	});
	test('should show the correct variant(secondary) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { variant: 'secondary' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('bg-neutral-500')).toBeTruthy();
	});
	test('should show the correct variant(success) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { variant: 'success' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('bg-green-500')).toBeTruthy();
	});
	test('should show the correct variant(warning) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { variant: 'warning' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('bg-yellow-500')).toBeTruthy();
	});
	test('should show the correct variant(danger) of the title while a user hovers the tooltip', async () => {
		render(Tooltip, { variant: 'danger' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').classList.contains('bg-red-500')).toBeTruthy();
	});
});
