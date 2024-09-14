<script lang="ts">
	import { modalContentVariant } from '$lib/components/modal/Modal';
	import { cn } from '$lib/utils/cn';
	import type { HTMLBaseAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLBaseAttributes;

	// taiwlind-variants
	const slots = modalContentVariant({});
</script>

<div class={cn(slots.content({}), $$restProps.class)}>
	<slot />
</div>
