<script lang="ts">
	import ChevronIcon from './ChevronIcon.svelte';
	import { cn } from '../../../utils/cn';
	import { tv } from '../../../utils/tv';

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
		base: ['duration-200'],
		variants: {
			open: {
				true: ['rotate-180'],
				false: ['']
			}
		}
	});
</script>

<ChevronIcon {size} class={cn(chevronIconVariant({ open }), $$restProps.class)} />
