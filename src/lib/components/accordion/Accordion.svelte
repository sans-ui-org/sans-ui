<script lang="ts">
	import type { ComponentSize, SlotsToClasses } from '$lib/utils/utils';
	import AccordionChevronIcon from './icons/AccordionChevronIcon.svelte';
	import { cn } from '$lib/utils/cn';
	import { createEventDispatcher, setContext } from 'svelte';
	import { accordionVariant, type AccoridonSlots } from '$lib/components/accordion/Accordion';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLButtonAttributes & {
		size?: ComponentSize;
		open?: boolean;
		title?: string;
		keepOpen?: boolean;
		classes?: SlotsToClasses<AccoridonSlots>;
	};

	/**
	 * Property that defines if the accordion should keep open.
	 */
	export let keepOpen = false;
	/**
	 * Property that define the open state of the accordion.
	 */
	export let open: boolean = keepOpen;
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
	const slots = accordionVariant({ size });

	// Store variant + size in the context
	setContext('size', size);

	// handlers
	const dispatcher = createEventDispatcher();
	const onClick = () => {
		if (keepOpen) return;
		dispatcher('click');
		open = !open;
	};
</script>

<!-- TODO: A11y is not okay now... -->
<!-- Trigger -->
<button
	{...$$restProps}
	class={cn(slots.base({ size }), classes.base, $$restProps.class)}
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
	{#if !keepOpen}
		<AccordionChevronIcon size={20} {open} />
	{/if}
</button>
<!-- Accordion Items -->
{#if open}
	<ul class="flex flex-col">
		<slot />
	</ul>
{/if}
