<script lang="ts">
	import { cx, type ComponentVariant } from '$lib/utils/utils';

	/**
	 * Property that defines the size of the icon.
	 */
	export let size: number = 16;

	/**
	 * Property that defines the variant of the icon.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the icon is flipped.
	 */
	export let open: boolean = false;

	function getIconStyle() {
		switch (variant) {
			case 'primary':
				return 'text-blue-600';
			case 'secondary':
				return 'text-black';
			case 'success':
				return 'text-green-600';
			case 'warning':
				return 'text-yellow-600';
			case 'danger':
				return 'text-red-600';
			// case 'indigo':
			// 	return 'text-indigo-600';
		}
	}

	let className = $$restProps.class;
	$: svgClassName = cx([className, 'duration-200', open ? 'rotate-180' : '', getIconStyle()]);
</script>

<svg viewBox="0 0 20 20" width={size} height={size} class={svgClassName} fill="currentColor">
	<path
		fill-rule="evenodd"
		d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
		clip-rule="evenodd"
	/>
</svg>
