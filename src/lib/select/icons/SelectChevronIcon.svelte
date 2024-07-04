<script lang="ts">
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

<svg viewBox="0 0 20 20" width={size} height={size} class={svgClassName} fill="currentColor">
	<path
		fill-rule="evenodd"
		d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
		clip-rule="evenodd"
	/>
</svg>
