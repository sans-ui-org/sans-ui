<script lang="ts">
	import '$lib/styles/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getButtonSlots } from './Button';
	import { onRipple } from '$lib/ripple/ripple';

	interface $$Props extends HTMLAttributes<HTMLButtonElement> {
		variant?: ComponentVariant;
		size?: ComponentSize;
	}

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';

	const className = $$restProps.class;
	const disabled = $$restProps.disabled;

	// slots
	$: slots = getButtonSlots({ className, disabled, variant, size });

	const ripple = onRipple('white');
</script>

<button
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
</button>
