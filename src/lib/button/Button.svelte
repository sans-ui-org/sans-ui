<script lang="ts">
	import '$lib/styles/global.css';
	import type { ComponentSize, ComponentVariant } from '$lib/utils/utils';
	import { useButton } from './hooks/useButton';

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: ComponentVariant = 'primary';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: ComponentSize = 'md';

	$: className = $$props.class;
	$: disabled = $$props.disabled;
	$: buttonProps = useButton({ className, disabled, variant, size });
</script>

<button
	type="button"
	{...$$props}
	{...$$restProps}
	class={buttonProps.slots.base}
	on:click
	on:blur
	on:mouseover
	on:mousedown
	on:mousemove
	on:mouseleave
	on:focus
	on:focusin
	on:focusout
>
	<slot />
</button>
