<script lang="ts">
	import { tv } from '$lib/utils/tv';

	// taiwlind-variants
	const modalBodyVariant = tv({
		slots: {
			base: ['p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain']
		},
		variants: {}
	});
	const slots = modalBodyVariant({});
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	role="document"
	class={slots.base({})}
	on:keydown|stopPropagation
	on:wheel|stopPropagation|passive
>
	<slot />
</div>
