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
test('should have correct variant for primary', () => {
	const linkBtn = render(Link, { variant: 'primary' });
	expect(linkBtn.getByRole('link').classList.contains('text-blue-500')).toBeTruthy();
});

test('should have correct variant for secondary', () => {
	const linkBtn = render(Link, { variant: 'secondary' });
	expect(linkBtn.getByRole('link').classList.contains('text-neutral-500')).toBeTruthy();
});

test('should have correct variant for success', () => {
	const linkBtn = render(Link, { variant: 'success' });
	expect(linkBtn.getByRole('link').classList.contains('text-green-500')).toBeTruthy();
});

test('should have correct variant for warning', () => {
	const linkBtn = render(Link, { variant: 'warning' });
	expect(linkBtn.getByRole('link').classList.contains('text-yellow-500')).toBeTruthy();
});

test('should have correct variant for danger', () => {
	const linkBtn = render(Link, { variant: 'danger' });
	expect(linkBtn.getByRole('link').classList.contains('text-red-500')).toBeTruthy();
});

//size
test('should have correct size for xs', () => {
	const linkBtn = render(Link, { size: 'xs' });
	expect(linkBtn.getByRole('link').classList.contains('text-xs')).toBeTruthy();
});

test('should have correct size for sm', () => {
	const linkBtn = render(Link, { size: 'sm' });
	expect(linkBtn.getByRole('link').classList.contains('text-sm')).toBeTruthy();
});

test('should have correct size for md', () => {
	const linkBtn = render(Link, { size: 'md' });
	expect(linkBtn.getByRole('link').classList.contains('text-base')).toBeTruthy();
});

test('should have correct size for lg', () => {
	const linkBtn = render(Link, { size: 'lg' });
	expect(linkBtn.getByRole('link').classList.contains('text-lg')).toBeTruthy();
});

test('should have correct size for xl', () => {
	const linkBtn = render(Link, { size: 'xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-xl')).toBeTruthy();
});

test('should have correct size for 2xl', () => {
	const linkBtn = render(Link, { size: '2xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-2xl')).toBeTruthy();
});

test('should have correct size for 3xl', () => {
	const linkBtn = render(Link, { size: '3xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-3xl')).toBeTruthy();
});

test('should have correct size for 4xl', () => {
	const linkBtn = render(Link, { size: '4xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-4xl')).toBeTruthy();
});

test('should have correct size for 5xl', () => {
	const linkBtn = render(Link, { size: '5xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-5xl')).toBeTruthy();
});

test('should have correct size for 6xl', () => {
	const linkBtn = render(Link, { size: '6xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-6xl')).toBeTruthy();
});

test('should have correct size for 7xl', () => {
	const linkBtn = render(Link, { size: '7xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-7xl')).toBeTruthy();
});

test('should have correct size for 8xl', () => {
	const linkBtn = render(Link, { size: '8xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-8xl')).toBeTruthy();
});

test('should have correct size for 9xl', () => {
	const linkBtn = render(Link, { size: '9xl' });
	expect(linkBtn.getByRole('link').classList.contains('text-9xl')).toBeTruthy();
});

//bold
test('should have correct font weight for bold', () => {
	const linkBtn = render(Link, { bold: 'bold' });
	expect(linkBtn.getByRole('link').classList.contains('font-bold')).toBeTruthy();
});

test('should have correct font weight for thin', () => {
	const linkBtn = render(Link, { bold: 'thin' });
	expect(linkBtn.getByRole('link').classList.contains('font-thin')).toBeTruthy();
});

test('should have correct font weight for extralight', () => {
	const linkBtn = render(Link, { bold: 'extralight' });
	expect(linkBtn.getByRole('link').classList.contains('font-extralight')).toBeTruthy();
});

test('should have correct font weight for light', () => {
	const linkBtn = render(Link, { bold: 'light' });
	expect(linkBtn.getByRole('link').classList.contains('font-light')).toBeTruthy();
});

test('should have correct font weight for normal', () => {
	const linkBtn = render(Link, { bold: 'normal' });
	expect(linkBtn.getByRole('link').classList.contains('font-normal')).toBeTruthy();
});

test('should have correct font weight for medium', () => {
	const linkBtn = render(Link, { bold: 'medium' });
	expect(linkBtn.getByRole('link').classList.contains('font-medium')).toBeTruthy();
});

test('should have correct font weight for semibold', () => {
	const linkBtn = render(Link, { bold: 'semibold' });
	expect(linkBtn.getByRole('link').classList.contains('font-semibold')).toBeTruthy();
});

test('should have correct font weight for extrabold', () => {
	const linkBtn = render(Link, { bold: 'extrabold' });
	expect(linkBtn.getByRole('link').classList.contains('font-extrabold')).toBeTruthy();
});

test('should have correct font weight for black', () => {
	const linkBtn = render(Link, { bold: 'black' });
	expect(linkBtn.getByRole('link').classList.contains('font-black')).toBeTruthy();
});

//underlineType
test('should not have underline when underlineType set to none', () => {
	const linkBtn = render(Link, { underlineType: 'none' });
	expect(linkBtn.getByRole('link').getAttribute('underline')).toBeFalsy();
});

test('should display hover underline Type when underlineType set to hover', () => {
	const linkBtn = render(Link, { underlineType: 'hover' });
	expect(linkBtn.getByRole('link').classList.contains('hover:underline')).toBeTruthy();
});

test('should always display underline Type when underlineType set to always', () => {
	const linkBtn = render(Link, { underlineType: 'always' });
	expect(linkBtn.getByRole('link').classList.contains('underline')).toBeTruthy();
});

test('should have display active underline Type when underlineType set to active', () => {
	const linkBtn = render(Link, { underlineType: 'active' });
	expect(linkBtn.getByRole('link').classList.contains('active:underline')).toBeTruthy();
});

//disabled
test('should have cursor-not-allowed when the link is disabled', () => {
	const linkBtn = render(Link, { disabled: true });
	expect(linkBtn.getByRole('link').classList.contains('cursor-not-allowed')).toBeTruthy();
});

test('should have aria-disabled attribute set to true when the link is disabled', async () => {
	const linkBtn = render(Link, { disabled: true });
	expect(linkBtn.getByRole('link', { hidden: true }).getAttribute('aria-disabled')).toBe('true');
	
});
