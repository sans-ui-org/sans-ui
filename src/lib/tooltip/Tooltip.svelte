<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { tooltipVariant } from '$lib/tooltip/Tooltip';
	import { cn } from '$lib/utils/cn';

	interface $$Props extends HTMLButtonAttributes {
		id?: string;
		variant?: ComponentVariant;
		size?: ComponentSize;
		title: string;
	}

	/**
	 * Property that define the id of the tooltip.
	 */
	export let id: string = '';
	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';
	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that defines the title of the tooltip.
	 */
	export let title: string = '';

	let open = false;

	// tailwind-variant
	const slots = tooltipVariant({ size, variant });

	// handlers
	const onFocusIn = () => {
		open = true;
	};
	const onFocusOut = () => {
		open = false;
	};
</script>

<button
	aria-describedby={id}
	class={slots.triggerWrapper({ size, variant })}
	on:mouseenter={onFocusIn}
	on:mouseleave={onFocusOut}
>
	{#if open}
		<div role="tooltip" {id} class={cn(slots.base({ size, variant }), $$restProps.class)}>
			<span class={slots.tooltipContent({ size, variant })}>{title}</span>
		</div>
	{/if}
	<slot />
</button>
