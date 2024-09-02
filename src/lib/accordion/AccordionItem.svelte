<script lang="ts">
	import type { ComponentSize, SlotsToClasses } from '$lib/utils/utils';
	import { getContext } from 'svelte';
	import type { HTMLLiAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils/cn';
	import { accordionItemVariant, type AccordionItemSlots } from '$lib/accordion/AccordionItem';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLLiAttributes & {
		classes?: SlotsToClasses<AccordionItemSlots>;
	};

	/** Property that defines the class names of the accordion item. */
	export let classes: SlotsToClasses<AccordionItemSlots> = { base: '' };

	let size = getContext('size') as ComponentSize;

	// tailwind-variant
	const slots = accordionItemVariant({ size });
</script>

<li
	class={cn(slots.base({ size }), classes.base, $$restProps.class)}
	{...$$restProps}
	transition:slide|global
>
	<slot />
</li>
