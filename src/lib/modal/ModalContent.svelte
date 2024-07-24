<script lang="ts">
	import { tv } from '$lib/utils/tailwind-variants';
	import type { ComponentSize } from '$lib/utils/utils';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type $$Props = {
		open?: boolean;
	};

	export let open: boolean = false;

	let size = getContext('size') as ComponentSize;

	// taiwlind-variants
	const modalContentWrapperVariant = tv({
		base: ['transition-all duration-300 ease-out flex relative overflow-y'],
		variants: {
			open: {
				true: 'opacity-1 translate-y-0',
				false: 'opacity-0 -translate-y-[20px]'
			},
			size: {
				sm: 'w-[60%] h-[40%]',
				md: 'w-[70%] h-[50%]',
				lg: 'w-[80%] h-[60%]',
				full: 'w-full h-full'
			}
		}
	});
	const modalContentVariant = tv({
		base: [
			'bg-white text-gray-500 rounded border-gray-200 dark:border-gray-700 divide-gray-200 shadow-md relative flex flex-col mx-auto w-full divide-y'
		],
		variants: {}
	});
</script>

<!-- modal content -->
<div class={twMerge(modalContentWrapperVariant({ size, open }), $$restProps.class)}>
	<div class={modalContentVariant({})}>
		<slot />
	</div>
</div>
