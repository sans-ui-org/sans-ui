<script lang="ts">
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import AccordionChevronIcon from './icons/AccordionChevronIcon.svelte';
	import { cn } from '$lib/utils/cn';
	import { tv } from 'tailwind-variants';
	import { setContext } from 'svelte';
	import { base } from '$app/paths';

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
		slots: {
			base: ['w-full flex flex-row items-center justify-between p-4 cursor-pointer']
		},
		variants: {
			variant: {
				primary: {
					base: 'bg-blue-100 text-blue-500'
				},
				secondary: {
					base: 'bg-neutral-100 text-neutral-500'
				},
				success: {
					base: 'bg-green-100 text-green-500'
				},
				warning: {
					base: 'bg-yellow-100 text-yellow-500'
				},
				danger: {
					base: 'bg-red-100 text-red-500'
				}
			},
			size: {
				sm: {
					base: 'text-sm p-2'
				},
				md: {
					base: 'text-base p-4'
				},
				lg: {
					base: 'text-lg p6'
				}
			}
		}
	});
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
