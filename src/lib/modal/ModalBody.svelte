<script lang="ts">
	import { modalBodyVariant } from '$lib/modal/Modal';
	import { cn } from '$lib/utils/cn';
	import type { HTMLBaseAttributes } from 'svelte/elements';

	type $$Props = HTMLBaseAttributes;

	// taiwlind-variants
	const slots = modalBodyVariant({});
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div role="document" class={cn(slots.base({}), $$restProps.class)}>
	<slot />
</div>
