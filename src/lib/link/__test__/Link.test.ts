import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import { Link } from '$lib';
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

describe('Link url', async () => {
	test('should render Link url correctly', async () => {
		render(Link, { url: 'https://storybook.js.org' });
		expect(screen.getByRole('link').getAttribute('url')).toBe('https://storybook.js.org');
	});
});

//variant
test('should have correct variant', () => {
	const linkBtn = render(Link, { variant: 'primary' });
	expect(linkBtn.getByRole('link').classList.contains('text-blue-500')).toBeTruthy();
});

test('should have correct variant', () => {
	const linkBtn = render(Link, { variant: 'secondary' });
	expect(linkBtn.getByRole('link').classList.contains('text-neutral-500')).toBeTruthy();
});

test('should have correct variant', () => {
	const linkBtn = render(Link, { variant: 'success' });
	expect(linkBtn.getByRole('link').classList.contains('text-green-500')).toBeTruthy();
});

test('should have correct variant', () => {
	const linkBtn = render(Link, { variant: 'warning' });
	expect(linkBtn.getByRole('link').classList.contains('text-yellow-500')).toBeTruthy();
});

test('should have correct variant', () => {
	const linkBtn = render(Link, { variant: 'danger' });
	expect(linkBtn.getByRole('link').classList.contains('text-red-500')).toBeTruthy();
});

//size
test('should have correct size', () => {
	const linkBtn = render(Link, { size: 'xs' });
	expect(linkBtn.getByRole('link').classList.contains('text-xs')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: 'sm' });
	expect(linkBtn.getByRole('link').classList.contains('text-sm')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: 'md' });
	expect(linkBtn.getByRole('link').classList.contains('text-base')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: 'lg' });
	expect(linkBtn.getByRole('link').classList.contains('text-lg')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: 'xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '2xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-2xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '3xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-3xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '4xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-4xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '5xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-5xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '6xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-6xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '7xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-7xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '8xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-8xl')).toBeTruthy();
});

test('should have correct size', () => {
	const linkBtn = render(Link, { size: '9xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-9xl')).toBeTruthy();
});

//bold
test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'bold' });
	expect(linkBtn.getByRole('link').classList.contains('font-bold')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'thin' });
	expect(linkBtn.getByRole('link').classList.contains('font-thin')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'extralight' });
	expect(linkBtn.getByRole('link').classList.contains('font-extralight')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'light' });
	expect(linkBtn.getByRole('link').classList.contains('font-light')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'normal' });
	expect(linkBtn.getByRole('link').classList.contains('font-normal')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'medium' });
	expect(linkBtn.getByRole('link').classList.contains('font-medium')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'semibold' });
	expect(linkBtn.getByRole('link').classList.contains('font-semibold')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'extrabold' });
	expect(linkBtn.getByRole('link').classList.contains('font-extrabold')).toBeTruthy();
});

test('should have correct font weight', () => {
	const linkBtn = render(Link, { bold: 'black' });
	expect(linkBtn.getByRole('link').classList.contains('font-black')).toBeTruthy();
});

//underlineType
test('should have correct underline Type', () => {
	const linkBtn = render(Link, { underlineType: 'none' });
	expect(linkBtn.getByRole('link').getAttribute('underline')).toBeFalsy();
});

test('should have correct underline Type', () => {
	const linkBtn = render(Link, { underlineType: 'hover' });
	expect(linkBtn.getByRole('link').classList.contains('hover:underline')).toBeTruthy();
});

test('should have correct underline Type', () => {
	const linkBtn = render(Link, { underlineType: 'always' });
	expect(linkBtn.getByRole('link').classList.contains('underline')).toBeTruthy();
});

test('should have correct underline Type', () => {
	const linkBtn = render(Link, { underlineType: 'active' });
	expect(linkBtn.getByRole('link').classList.contains('active:underline')).toBeTruthy();
});

//disabled
test('should have correct underline Type', () => {
	const linkBtn = render(Link, { disabled: 'true' });
	expect(linkBtn.getByRole('link').classList.contains('cursor-not-allowed')).toBeTruthy();
});

test('should have disabled attribute', async () => {
	const linkBtn = render(Link, { disabled: 'true' });
	expect(linkBtn.getByRole('link').getAttribute('aria-disabled')).toBe('true');
});
