<script lang="ts" context="module">
	export type ButtonKind = 'solid' | 'bordered' | 'flat' | 'shadow';
</script>

<script lang="ts">
	import '$lib/global.css';
	import type {
		ComponentRounded,
		ComponentSize,
		ComponentVariant,
		SlotsToClasses
	} from '$lib/utils/utils';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { createRipple } from '$lib/actions/ripple';
	import { cn } from '$lib/utils/cn';
	import type { ButtonSlots } from '$lib/button/Button';
	import { buttonVariant } from '$lib/button/Button';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & {
		variant?: ComponentVariant;
		size?: ComponentSize;
		disabled?: boolean;
		rippled?: boolean;
		kind?: ButtonKind;
		rounded?: ComponentRounded;
		iconOnly?: boolean;
		href?: string;
		animation?: boolean;
		classes?: SlotsToClasses<ButtonSlots>;
	};

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that defines the rounded corners of the button.
	 */
	export let kind: ButtonKind = 'solid';
	/**
	 * Property that defines the rounded corners of the button.
	 */
	export let rounded: ComponentRounded = 'full';
	/**
	 * Property that defines if the button is disabled.
	 */
	export let disabled: boolean = false;
	/**
	 * Property that defines whether the ripple effect is enabled.
	 */
	export let rippled: boolean = true;
	/**
	 * Property that defines whether the button is an icon only button.
	 */
	export let iconOnly: boolean = false;
	/**
	 * Property that defines the href of the button.
	 */
	export let href: string | undefined = undefined;
	/**
	 * Property that defines whether the button has an animation.
	 */
	export let animation: boolean = false;
	/*
	 * Property that defines the class names of the button.
	 */
	export let classes: SlotsToClasses<ButtonSlots> = {};

	// tailwind-variants
	const slots = buttonVariant({ variant, size, rounded, kind, iconOnly, disabled, href: !!href });

	// ripple effect
	const ripple = disabled || !rippled ? () => {} : createRipple();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...$$restProps}
	role={href ? 'link' : 'button'}
	{href}
	{disabled}
	class={cn(
		slots.base({ rounded, size, iconOnly, variant, kind, href: !!href, disabled, animation }),
		classes.base,
		$$restProps.class
	)}
	on:click
	on:change
	on:keydown
	on:keyup
	on:touchstart|passive
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
	use:ripple
>
	<slot />
</svelte:element>
