<script lang="ts">
	import type { ComponentSize, ComponentVariant, SlotsToClasses } from '$lib/utils/utils';
	import { getContext } from 'svelte';
	import type { HTMLLiAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils/cn';
	import { accordionItemVariant, type AccordionItemSlots } from '$lib/accordion/AccordionItem';

	type $$Props = HTMLLiAttributes & {
		classes?: SlotsToClasses<AccordionItemSlots>;
	};

	/** Property that defines the class names of the accordion item. */
	export let classes: SlotsToClasses<AccordionItemSlots> = { base: '' };

	let variant = getContext('variant') as ComponentVariant;
	let size = getContext('size') as ComponentSize;

	// tailwind-variant
	const slots = accordionItemVariant({ variant, size });
</script>

<li
	class={cn(slots.base({ variant, size }), classes.base, $$restProps.class)}
	{...$$restProps}
	transition:slide|global
>
	<slot />
</li>
