<script lang="ts">
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';
	import { cx } from '$lib/utils/utils';

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

	let className = $$restProps.class;
	$: svgClassName = cx([
		className,
		animation ? 'transform transition-transform ease-in-out duration-200' : '',
		open ? 'rotate-180' : '',
		'text-black'
	]);
</script>

<ChevronIcon {size} class={svgClassName} />
