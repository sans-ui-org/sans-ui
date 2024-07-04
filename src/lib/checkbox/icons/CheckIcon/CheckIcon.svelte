<script lang="ts">
	import { type ComponentVariant } from '$lib/utils/utils';
	import type { CheckboxIconSize } from '$lib/checkbox/icons/InderminateIcon/IndeterminateIcon';
	import { getCheckIconSlots } from '$lib/checkbox/icons/CheckIcon/CheckIcon';

	export let disabled: boolean = false;
	export let size: CheckboxIconSize = 'md';
	export let variant: ComponentVariant = 'primary';
	export let checked: boolean = false;
	export let animation: boolean = false;

	$: notChecked = !checked;
	$: slots = getCheckIconSlots({ disabled, size, variant });
</script>

<svg class={slots.base} class:notChecked viewBox="0 0 100 100">
	<path
		stroke-width={7}
		stroke-dasharray={320}
		stroke-dashoffset={checked ? 320 : 0}
		d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
		class:animation
	/>
	<polyline
		class="check fill-none"
		stroke="white"
		stroke-width={7}
		stroke-dasharray={70}
		stroke-dashoffset={checked ? 0 : 70}
		points="25.5,53.5 39.5,67.5 72.5,34.5 "
		class:animation
	/>
</svg>

<style>
	.animation {
		transition: stroke-dashoffset 0.4s linear;
	}
	.notChecked {
		fill: none;
	}
</style>
