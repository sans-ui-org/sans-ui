<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { getButtonSlots } from '$lib/button/Button';
	import { createRipple } from '$lib/actions/ripple';

	type $$Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & {
		variant?: ComponentVariant;
		size?: ComponentSize;
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
	 * Property that defines the href of the button.
	 */
	export let href: string | undefined = undefined;

	let className = $$restProps.class;
	const disabled = $$restProps.disabled;

	// slots
	$: slots = getButtonSlots({ className, disabled, variant, size });

	const ripple = createRipple();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role={href ? 'link' : 'button'}
	{href}
	{...$$restProps}
	class={slots.base}
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
