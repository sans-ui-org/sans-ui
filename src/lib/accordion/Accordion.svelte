<script lang="ts">
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import AccordionChevronIcon from './icons/AccordionChevronIcon.svelte';
	import { cn } from '$lib/utils/cn';
	import { setContext } from 'svelte';
	import { accordionVariant } from '$lib/accordion/Accordion';

	type $$Props = HTMLButtonAttributes & {
		variant?: ComponentVariant;
		size?: ComponentSize;
		open?: boolean;
		title?: string;
	};

	/**
	 * Property that define the variant of the accordion.
	 */
	export let variant: ComponentVariant = 'secondary';
	/**
	 * Property that define the open state of the accordion.
	 */
	export let open: boolean = false;
	/**
	 * Property that defines the size of the accordion.
	 */
	export let size: ComponentSize = 'md';
	/**
	 * Property that defines the title of the accordion.
	 */
	export let title: string = '';

	// tailwind-variant
	const slots = accordionVariant({ variant, size });

	// Store variant + size in the context
	setContext('variant', variant);
	setContext('size', size);

	// handlers
	const onClick = () => {
		open = !open;
	};
</script>

<!-- Trigger -->
<button
	class={cn(slots.base({ variant, size }), $$restProps.class)}
	{...$$restProps}
	on:click={onClick}
>
	<span class="font-semibold">{title}</span>
	<AccordionChevronIcon size={20} {open} />
</button>
<!-- Accordion Items -->
{#if open}
	<ul class="flex flex-col">
		<slot />
	</ul>
{/if}
