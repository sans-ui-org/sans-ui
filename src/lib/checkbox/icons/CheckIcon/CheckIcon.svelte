<script lang="ts">
	import type { ComponentVariant } from '$lib/utils/utils';
	import type { CheckboxIconSize } from '$lib/checkbox/icons/InderminateIcon/IndeterminateIcon.svelte';
	import { tv } from '$lib/utils/tv';

	export let disabled: boolean = false;
	export let size: CheckboxIconSize = 'md';
	export let variant: ComponentVariant = 'primary';
	export let checked: boolean = false;
	export let animation: boolean = false;

	// tailwind-variant
	const checkIconVariant = tv({
		slots: {
			base: ['sui--check-icon', 'hover:bg-gray-100 rounded stroke-neutral-500']
		},
		variants: {
			variant: {
				primary: { base: 'fill-blue-500' },
				secondary: { base: 'fill-neutral-500' },
				success: { base: 'fill-green-500' },
				warning: { base: 'fill-yellow-500' },
				danger: { base: 'fill-red-500' }
			},
			size: {
				sm: { base: 'w-5 h-5' },
				md: { base: 'w-7 h-7' },
				lg: { base: 'w-9 h-9' }
			},
			disabled: {
				true: { base: 'cursor-not-allowed fill-gray-400' },
				false: { base: 'cursor-pointer' }
			}
		}
	});
	const slots = checkIconVariant({ variant, size, disabled });

	// check state
	$: notChecked = !checked;
</script>

<svg class={slots.base({ variant, size, disabled })} class:notChecked viewBox="0 0 100 100">
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
