<script lang="ts" context="module">
	export type UnderlineType = 'none' | 'hover' | 'always' | 'active';
	export type FontSize =
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl'
		| '8xl'
		| '9xl';
	export type FontWeight =
		| 'thin'
		| 'extralight'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semibold'
		| 'bold'
		| 'extrabold'
		| 'black';
</script>

<script lang="ts">
	import '$lib/global.css';
	import type { ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';
	import { linkVariant, type LinkSlots } from '$lib/link/Link';

	interface $$Props extends HTMLAnchorAttributes {
		variant?: ComponentVariant;
		size?: FontSize;
		bold?: FontWeight;
		underlineType?: UnderlineType;
		disabled?: boolean;
		href?: string;
		classes?: SlotsToClasses<LinkSlots>;
	}

	/**
	 * Property that define the variant of the link.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the link.
	 */
	export let size: FontSize = 'md';
	/**
	 * Property that defines the weight of the link.
	 */
	export let bold: FontWeight = 'normal';
	/**
	 * Property that defines the decoration(underline) of the link.
	 */
	export let underlineType: UnderlineType = 'always';
	/**
	 * Property that defines if the link is disalbe.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines the label of the link.
	 */
	export let href: string = '';
	/**
	 * Property that defines the class names of the link.
	 */
	export let classes: SlotsToClasses<LinkSlots> = {};

	let url = disabled ? undefined : href;

	// tailwind-variants
	const slots = linkVariant({ variant, underlineType, size, bold, disabled });
</script>

<a
	{...$$restProps}
	class={cn(
		slots.base({ variant, underlineType, size, bold, disabled }),
		classes.base,
		$$restProps.class
	)}
	aria-disabled={disabled}
	href={url}><slot /></a
>
