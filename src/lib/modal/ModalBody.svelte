<script lang="ts">
	import { tv } from '$lib/utils/tailwind-variants';

	// taiwlind-variants
	const modalBodyVariant = tv({
		base: ['p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain'],
		variants: {}
	});
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	role="document"
	class={modalBodyVariant({})}
	on:keydown|stopPropagation
	on:wheel|stopPropagation|passive
>
	<slot />
</div>
