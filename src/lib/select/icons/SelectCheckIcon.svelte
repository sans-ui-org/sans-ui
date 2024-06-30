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
	$: svgClassName = cx([getIconStyle(), className]);
</script>

<svg
	focusable="false"
	fill="currentColor"
	class={svgClassName}
	viewBox="0 0 32 32"
	width={size}
	height={size}
	aria-hidden="true"
>
	<path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path>
</svg>
