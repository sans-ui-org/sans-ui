<script lang="ts">
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { tv } from '$lib/utils/tailwind-variants';
	import { getContext } from 'svelte';
	import type { HTMLLiAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLLiAttributes;

	let variant = getContext('variant') as ComponentVariant;
	let size = getContext('size') as ComponentSize;

	// tailwind-variant
	const accordionItemVariant = tv({
		base: ['transition duration-200'],
		variants: {
			variant: {
				primary: 'bg-blue-100 hover:bg-blue-200 text-blue-500',
				secondary: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-500',
				success: 'bg-green-100 hover:bg-green-200 text-green-500',
				warning: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-500',
				danger: 'bg-red-100 hover:bg-red-200 text-red-500'
			},
			size: {
				sm: 'text-sm p-1',
				md: 'text-base p-2',
				lg: 'text-lg p-3'
			}
		}
	});
</script>

<li class={twMerge(accordionItemVariant({ variant, size }))} transition:slide|global>
	<slot />
</li>
