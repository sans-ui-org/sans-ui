<script lang="ts">
	import { tv } from '$lib/utils/tv';
	import type { ComponentSize } from '$lib/utils/utils';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils/cn';

	type $$Props = {
		open?: boolean;
	};

	export let open: boolean = false;

	let size = getContext('size') as ComponentSize;

	// taiwlind-variants
	const modalContentVariant = tv({
		slots: {
			base: ['transition-all duration-300 ease-out flex relative overflow-y'],
			content: [
				'bg-white text-gray-500 rounded border-gray-200 dark:border-gray-700 divide-gray-200 shadow-md relative flex flex-col mx-auto w-full divide-y'
			]
		},
		variants: {
			open: {
				true: { base: 'opacity-1 translate-y-0' },
				false: { base: 'opacity-0 -translate-y-[20px]' }
			},
			size: {
				sm: { base: 'w-[60%] h-[40%]' },
				md: { base: 'w-[70%] h-[50%]' },
				lg: { base: 'w-[80%] h-[60%]' },
				full: { base: 'w-full h-full' }
			}
		}
	});
	const slots = modalContentVariant({ open, size });
</script>

<div class={cn(slots.base({ size, open }), $$restProps.class)}>
	<div class={slots.content({})}>
		<slot />
	</div>
</div>
