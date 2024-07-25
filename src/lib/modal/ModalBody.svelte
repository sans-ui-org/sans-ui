<script lang="ts">
	import { modalBodyVariant } from '$lib/modal/Modal';

	// taiwlind-variants
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
