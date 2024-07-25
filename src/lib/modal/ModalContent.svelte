<script lang="ts">
	import type { ComponentSize } from '$lib/utils/utils';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils/cn';
	import { modalContentVariant } from "$lib/modal/Modal";

	type $$Props = {
		open?: boolean;
	};

	export let open: boolean = false;

	let size = getContext('size') as ComponentSize;

	// taiwlind-variants
	const slots = modalContentVariant({ open, size });
</script>

<div class={cn(slots.base({ size, open }), $$restProps.class)}>
	<div class={slots.content({})}>
		<slot />
	</div>
</div>
