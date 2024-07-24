<script lang="ts">
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import AccordionChevronIcon from './icons/AccordionChevronIcon.svelte';
	import { twMerge } from '$lib/utils/tailwind-merge';
	import { tv } from 'tailwind-variants';
	import { setContext } from 'svelte';

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

	// tailwind-variants
	const accordionVariant = tv({
		base: ['w-full flex flex-row items-center justify-between p-4 cursor-pointer'],
		variants: {
			variant: {
				primary: 'bg-blue-100 text-blue-500',
				secondary: 'bg-neutral-100 text-neutral-500',
				success: 'bg-green-100 text-green-500',
				warning: 'bg-yellow-100 text-yellow-500',
				danger: 'bg-red-100 text-red-500'
			},
			size: {
				sm: 'text-sm p-2',
				md: 'text-base p-4',
				lg: 'text-lg p6'
			}
		}
	});

	// Store variant + size in the context
	setContext('variant', variant);
	setContext('size', size);

	// onClick handler
	const onClick = () => {
		open = !open;
	};
</script>

<!-- Trigger -->
<button
	class={twMerge(accordionVariant({ variant, size }), $$restProps.class)}
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
