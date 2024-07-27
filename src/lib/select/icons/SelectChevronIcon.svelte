<script lang="ts">
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';
	import { cn } from '$lib/utils/cn';
	import { tv } from '$lib/utils/tv';

	/**
	 * Property that defines the size of the icon.
	 */
	export let size: number = 16;

	/**
	 * Property that defines the icon is flipped.
	 */
	export let open: boolean = false;

	/**
	 * Property that defines the animation of the icon.
	 */
	export let animation: boolean = true;

	// tailwind-variant
	const chevronIconVariant = tv({
		base: ['text-black'],
		variants: {
			animation: {
				true: ['transform transition-transform ease-in-out duration-200']
			},
			open: {
				true: ['rotate-180']
			}
		}
	});
</script>

<ChevronIcon {size} class={cn(chevronIconVariant({ animation, open }), $$restProps.class)} />
