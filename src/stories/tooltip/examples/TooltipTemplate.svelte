<script lang="ts">
	import Tooltip from '$lib/tooltip/Tooltip.svelte';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';

	export let title = 'Hello world';
	export let variant: ComponentVariant = 'primary';
	export let size: ComponentSize = 'md';
</script>

<div>
	<Tooltip {title} {variant} {size}><button>Trigger</button></Tooltip>
</div>

<style>
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
