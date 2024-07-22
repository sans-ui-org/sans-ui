<script lang="ts">
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { cx } from '$lib/utils/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import AccordionChevronIcon from './icons/AccordionChevronIcon.svelte';

	interface $$Props extends HTMLButtonAttributes {
		variant?: ComponentVariant;
		size?: ComponentSize;
		open?: boolean;
		title?: string;
	}

	export let open: boolean = false;
	export let title: string = '';

	const onClick = () => {
		open = !open;
	};
</script>

<button
	class={cx([
		'w-full flex flex-row items-center justify-between p-4 cursor-pointer',
		$$restProps.class
	])}
	{...$$restProps}
	on:click={onClick}
>
	<span class="font-semibold">{title}</span>
	<AccordionChevronIcon size={20} {open} />
</button>
<!-- TODO: Items here -->
{#if open}
	<ul class="flex flex-col">
		<slot />
	</ul>
{/if}
