<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { getTooltipSlots } from './Tooltip';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		variant?: ComponentVariant;
		size?: ComponentSize;
		title: string;
	}

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
	export let title: string;

	$: open = false;

	const onFocusIn = () => {
		open = true;
	};
	const onFocusOut = () => {
		open = false;
	};

	const className = $$props.class;
	$: slots = getTooltipSlots({ variant, size, className });
</script>

<div class={slots.base}>
	{#if open}
		<div class={slots.tooltip}>
			<span class={slots.tooltipContent}>{title}</span>
		</div>
	{/if}
	<button class={slots.triggerWrapper} on:mouseenter={onFocusIn} on:mouseleave={onFocusOut}>
		<slot />
	</button>
</div>
