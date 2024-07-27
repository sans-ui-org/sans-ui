<script lang="ts">
	import { modalContentVariant } from '$lib/modal/Modal';
	import { cn } from '$lib/utils/cn';
	import type { HTMLBaseAttributes } from 'svelte/elements';

	type $$Props = HTMLBaseAttributes;

	// taiwlind-variants
	const slots = modalContentVariant({});
</script>

<div class={cn(slots.content({}), $$restProps.class)}>
	<slot />
</div>
