<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import ClearableIcon from '../../components/inputContent/ClearableIcon.svelte';

	/**
	 * Property that defines the content of the input.
	 */
	export let content: SvelteComponent | null;
	/**
	 * Property that defines if the input is clearable.
	 */
	export let clearable: boolean = false;

	let icon = clearable ? ClearableIcon : content;
</script>

<div class={$$props.class}>
	<svelte:component this={icon} />
</div>
