import { describe, expect, test } from 'vitest';
import TooltipTemplate from './templates/TooltipTemplate.svelte';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

describe('Tooltip component', async () => {
	test('should render tooltip', async () => {
		render(TooltipTemplate);
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip')).toBeTruthy();
		await userEvent.unhover(trigger);
	});

	//title
	test('should show the correct tooltip title while a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is title' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByText('This is title')).toBeTruthy();
		await userEvent.unhover(trigger);
	});

	//size
	test('should show the correct size(sm) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', size: 'sm' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.fontSize).toBe('12px');
		await userEvent.unhover(trigger);
	});
	test('should show the correct size(md) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', size: 'md' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.fontSize).toBe('14px');
		await userEvent.unhover(trigger);
	});
	test('should show the correct size(lg) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', size: 'lg' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.fontSize).toBe('16px');
		await userEvent.unhover(trigger);
	});

	//variant
	test('should show the correct variant(primary) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', variant: 'primary' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.background).toBe('rgb(59, 130, 246)');
		await userEvent.unhover(trigger);
	});
	test('should show the correct variant(secondary) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', variant: 'secondary' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.background).toBe('rgb(115, 115, 115)');
		await userEvent.unhover(trigger);
	});
	test('should show the correct variant(success) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', variant: 'success' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.background).toBe('rgb(34, 197, 94)');
		await userEvent.unhover(trigger);
	});
	test('should show the correct variant(warning) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', variant: 'warning' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.background).toBe('rgb(234, 179, 8)');
		await userEvent.unhover(trigger);
	});
	test('should show the correct variant(danger) of tooltip when a user hovers the trigger', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', variant: 'danger' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.background).toBe('rgb(239, 68, 68)');
		await userEvent.unhover(trigger);
	});

	// position
	test('should have the correct position(top)', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', position: 'top' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.marginTop).toBe('-5px');
		await userEvent.unhover(trigger);
	});
	test('should have the correct position(bottom)', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', position: 'bottom' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.marginTop).toBe('5px');
		await userEvent.unhover(trigger);
	});
	test('should have the correct position(top)', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', position: 'left' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.marginLeft).toBe('-5px');
		await userEvent.unhover(trigger);
	});
	test('should have the correct position(top)', async () => {
		render(TooltipTemplate, { title: 'This is tooltip', position: 'right' });
		const trigger = screen.getByRole('button');
		await userEvent.hover(trigger);
		expect(screen.getByRole('tooltip').style.marginLeft).toBe('5px');
		await userEvent.unhover(trigger);
	});
});
