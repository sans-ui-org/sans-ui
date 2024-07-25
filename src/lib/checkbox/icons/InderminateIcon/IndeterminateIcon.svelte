<script lang="ts" context="module">
	export type CheckboxIconSize = 'sm' | 'md' | 'lg';
</script>

<script lang="ts">
	import { type ComponentVariant } from '$lib/utils/utils';
	import { tv } from '$lib/utils/tv';
	import { cn } from '$lib/utils/cn';

	export let disabled: boolean = false;
	export let size: CheckboxIconSize = 'md';
	export let variant: ComponentVariant = 'primary';

	const indeterminateIconVariant = tv({
		slots: {
			base: ['sui--check-icon', 'rounded', 'hover:bg-gray-100']
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
	const slots = indeterminateIconVariant({ variant, size, disabled });
</script>

<svg
	class={cn(slots.base({ variant, size, disabled }), $$restProps.class)}
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
