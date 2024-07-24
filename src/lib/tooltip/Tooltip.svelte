<script lang="ts">
	import '$lib/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { tv } from '$lib/utils/tailwind-variants';
	import { twMerge } from '$lib/utils/tailwind-merge';

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
	const triggerWrapperVariant = tv({
		base: ['relative bg-transparent border-none cursor-auto'],
		variants: {}
	});
	const tooltipVariant = tv({
		base: [
			'absolute z-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded w-max',
			"before:content=[''] before:absolute before:bottom-[-1rem] before:left-1/2 before:ml-[-10px] before:border-8 before:border-solid  before:border-top-8",
			// Why is it detached from above? => tailwind-variant does not catch these when it is included in the above array item.
			'before:border-b-transparent before:border-l-transparent before:border-r-transparent'
		],
		variants: {
			variant: {
				primary: 'bg-blue-500 before:border-t-blue-500',
				secondary: 'bg-neutral-500 before:border-t-neutral-500',
				success: 'bg-green-500 before:border-t-green-500',
				warning: 'bg-yellow-500 before:border-t-yellow-500',
				danger: 'bg-red-500 before:border-t-red-500'
			},
			size: {
				sm: 'py-1 px-2 text-sm -top-[24px]',
				md: 'py-2 px-3 text-base -top-[32px]',
				lg: 'py-3 px-4 text-lg -top-[40px]'
			}
		}
	});
	const tooltipContentVariant = tv({
		base: ['text-white'],
		variants: {
			size: {
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg'
			}
		}
	});

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
	class={triggerWrapperVariant({})}
	on:mouseenter={onFocusIn}
	on:mouseleave={onFocusOut}
>
	{#if open}
		<div role="tooltip" {id} class={twMerge(tooltipVariant({ size, variant }), $$restProps.class)}>
			<span class={tooltipContentVariant({ size })}>{title}</span>
		</div>
	{/if}
	<slot />
</button>
