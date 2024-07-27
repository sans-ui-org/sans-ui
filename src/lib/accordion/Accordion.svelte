<script lang="ts">
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import AccordionChevronIcon from './icons/AccordionChevronIcon.svelte';
	import { cn } from '$lib/utils/cn';
	import { setContext } from 'svelte';
	import { accordionVariant, type AccoridonSlots } from '$lib/accordion/Accordion';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = HTMLButtonAttributes & {
		variant?: ComponentVariant;
		size?: ComponentSize;
		open?: boolean;
		title?: string;
		classes?: SlotsToClasses<AccoridonSlots>;
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
	/**
	 * Property that defines the class names of the accordion.
	 */
	export let classes: SlotsToClasses<AccoridonSlots> = { base: '' };

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

<!-- TODO: A11y is not okay now... -->
<!-- Trigger -->
<button
	class={cn(slots.base({ variant, size }), classes.base, $$restProps.class)}
	{...$$restProps}
	on:click={onClick}
	on:change
	on:keydown
	on:keyup
	on:touchstart|passive
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
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
