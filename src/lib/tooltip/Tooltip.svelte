<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { getTooltipSlots } from '$lib/tooltip/Tooltip';

	interface $$Props {
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
	export let title: string;

	let open = false;

	const onFocusIn = () => {
		open = true;
	};
	const onFocusOut = () => {
		open = false;
	};

	let className = $$props.class;
	$: slots = getTooltipSlots({ variant, size, className });
</script>

<div class={slots.base}>
	{#if open}
		<div role="tooltip" {id} class={slots.tooltip}>
			<span class={slots.tooltipContent}>{title}</span>
		</div>
	{/if}
	<button
		aria-describedby={id}
		class={slots.triggerWrapper}
		on:mouseenter={onFocusIn}
		on:mouseleave={onFocusOut}
	>
		<slot />
	</button>
</div>
