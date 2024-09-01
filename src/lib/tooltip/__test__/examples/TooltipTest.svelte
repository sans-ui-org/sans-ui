<script lang="ts">
	import Tooltip from '$lib/tooltip/Tooltip.svelte';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';

	interface $$Props {
		variant?: ComponentVariant;
		size?: ComponentSize;
		title: string;
		position?: 'top' | 'bottom' | 'left' | 'right';
		trackable?: boolean;
		delayToOpen?: number;
		delayToHide?: number;
	}

	export let variant: ComponentVariant = 'primary';
	export let size: ComponentSize = 'md';
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let title: string = '';
	export let trackable: boolean = false;
	export let delayToOpen: number = 0;
	export let delayToHide: number = 0;
</script>

<Tooltip {variant} {size} {position} {title} {trackable} {delayToOpen} {delayToHide}
	>Hover me</Tooltip
>
