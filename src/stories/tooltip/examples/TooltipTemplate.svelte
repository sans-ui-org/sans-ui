<script lang="ts">
	import Tooltip from '$lib/tooltip/Tooltip.svelte';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Props {
		id?: string;
		variant?: ComponentVariant;
		size?: ComponentSize;
		title: string;
		position?: 'top' | 'bottom' | 'left' | 'right';
		trackable?: boolean;
		delayToOpen?: number;
		delayToHide?: number;
	}

	export let id: string = '';
	export let variant: ComponentVariant = 'primary';
	export let size: ComponentSize = 'md';
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let title: string = 'This is a tooltip';
	export let trackable: boolean = false;
	export let delayToOpen: number = 0;
	export let delayToHide: number = 0;
</script>

<div class="canvas">
	<Tooltip {id} {variant} {size} {position} {title} {trackable} {delayToOpen} {delayToHide}
		>Hover me</Tooltip
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
