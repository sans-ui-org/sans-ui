<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { createRipple } from '$lib/actions/ripple';
	import { cn } from '$lib/utils/cn';
	import { buttonVariant } from '$lib/button/Button';

	type $$Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & {
		variant?: ComponentVariant;
		size?: ComponentSize;
		disabled?: boolean;
		href?: string;
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
	 * Property that defines if the button is disabled.
	 */
	export let disabled: boolean = false;

	/**
	 * Property that defines the href of the button.
	 */
	export let href: string | undefined = undefined;

	// tailwind-variants
	const slots = buttonVariant({ variant, size });

	const ripple = disabled ? () => {} : createRipple();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...$$restProps}
	role={href ? 'link' : 'button'}
	{href}
	{disabled}
	class={cn(slots.base({ variant, size }), $$restProps.class)}
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
