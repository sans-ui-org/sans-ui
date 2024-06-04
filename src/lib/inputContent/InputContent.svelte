<script lang="ts">
	import '$lib/styles/global.css';
	import type { SvelteComponent } from 'svelte';
	import ClearableIcon from './ClearableIcon.svelte';

	type Component = $$Generic<typeof SvelteComponent>;

	export let content: Component | null;
	export let clearable: boolean = false;

	let icon = clearable ? ClearableIcon : content;
</script>

<div class={$$props.class}>
	<svelte:component this={icon} />
</div>
