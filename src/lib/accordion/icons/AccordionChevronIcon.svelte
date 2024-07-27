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

	// tailwind-variant
	const chevronIconVariant = tv({
		base: ['text-black duration-200'],
		variants: {
			open: {
				true: ['rotate-180'],
				false: ['']
			}
		}
	});
</script>

<ChevronIcon {size} class={cn(chevronIconVariant({ open }), $$restProps.class)} />
