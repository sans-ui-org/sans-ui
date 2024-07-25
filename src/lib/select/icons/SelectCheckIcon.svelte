<script lang="ts">
	import type { ComponentVariant } from '$lib/utils/utils';
	import { cn } from '$lib/utils/cn';
	import { tv } from '$lib/utils/tv';

	/**
	 * Property that defines the size of the icon.
	 */
	export let size: number = 16;

	/**
	 * Property that defines the variant of the icon.
	 */
	export let variant: ComponentVariant = 'primary';

	// tailwind-variant
	const checkIconVariant = tv({
		base: ['text-black'],
		variants: {
			variant: {
				primary: ['text-blue-600'],
				secondary: ['text-black'],
				success: ['text-green-600'],
				warning: ['text-yellow-600'],
				danger: ['text-red-600']
			}
		}
	});
</script>

<svg
	focusable="false"
	fill="currentColor"
	class={cn(checkIconVariant({ variant }), $$restProps.class)}
	viewBox="0 0 32 32"
	width={size}
	height={size}
	aria-hidden="true"
>
	<path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path>
</svg>
