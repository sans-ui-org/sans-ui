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

	let className = $$restProps.class;
	$: svgClassName = cx([
		className,
		'text-black duration-200',
		open ? 'rotate-180' : '',
		'text-black'
	]);
</script>

<ChevronIcon {size} class={svgClassName} />
