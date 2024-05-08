<script lang="ts">
	import '$lib/styles/global.css';
	import { useButton } from './hooks/useButton';

	/**
	 * Property that define the variant of the button.
	 */
	export let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'indigo' =
		'primary';

	/**
	 * Property that defines the size of the button.
	 */
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	/**
	 * Property that defines the label of the button.
	 */
	export let label: string = '';

	$: props = $$props;
	$: buttonProps = useButton({ props, variant, size });
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
	{label}
</button>

<!-- 
	You need to use Tailwind CSS as first priority, however, sometimes they does not support some special CSS syntaxes. So, please use this "style" in that senario. 
-->
<style></style>
