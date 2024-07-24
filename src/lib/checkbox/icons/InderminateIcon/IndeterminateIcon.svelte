<script lang="ts" context="module">
	export type CheckboxIconSize = 'sm' | 'md' | 'lg';
</script>

<script lang="ts">
	import { type ComponentVariant } from '$lib/utils/utils';
	import { tv } from '$lib/utils/tailwind-variants';
	import { twMerge } from '$lib/utils/tailwind-merge';

	export let disabled: boolean = false;
	export let size: CheckboxIconSize = 'md';
	export let variant: ComponentVariant = 'primary';

	const indeterminateIconVariant = tv({
		base: ['sui--check-icon', 'rounded', 'hover:bg-gray-100'],
		variants: {
			variant: {
				primary: 'fill-blue-500',
				secondary: 'fill-neutral-500',
				success: 'fill-green-500',
				warning: 'fill-yellow-500',
				danger: 'fill-red-500'
			},
			size: {
				sm: 'w-5 h-5',
				md: 'w-7 h-7',
				lg: 'w-9 h-9'
			},
			disabled: {
				true: 'cursor-not-allowed fill-gray-400',
				false: 'cursor-pointer'
			}
		}
	});
</script>

<svg
	class={twMerge(indeterminateIconVariant({ variant, size, disabled }), $$restProps.class)}
	viewBox="0 0 100 100"
	fill="white"
>
	<path
		class={'box'}
		stroke-width={7}
		d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
	/>
	<line stroke="white" stroke-width={7} x1="70" x2="30" y1="50" y2="50" />
</svg>
