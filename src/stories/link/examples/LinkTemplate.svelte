<script lang="ts">
	import type { FontSize, FontWeight, UnderlineType } from '$lib/link/Link.svelte';
	import Link from '$lib/link/Link.svelte';
	import type { ComponentVariant } from '$lib/utils/utils';

	export let variant: ComponentVariant = 'primary';
	export let size: FontSize = 'md';
	export let bold: FontWeight = 'normal';
	export let href: string = 'https://www.google.com';
	export let underlineType: UnderlineType = 'always';
	export let disabled = false;
	export let external = false;
	export let windowIcon = false;
</script>

<div class="canvas">
	<Link {href} {variant} {size} {bold} {disabled} {underlineType} {external} {windowIcon}
		>Google</Link
	>
</div>

<style>
	.canvas {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
