<script lang="ts">
	import Button from '$lib/button/Button.svelte';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';
</script>

<Button {variant} {size}>Button</Button>
