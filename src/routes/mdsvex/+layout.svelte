<script context="module">
	import h2 from './semantics/h2.svelte';
	import h3 from './semantics/h3.svelte';
	import p from './semantics/p.svelte';
	export { h2, h3, p };
</script>

<script>
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import Meta from './components/Meta.svelte';
	import DocHeader from './components/DocHeader.svelte';

	export let title = '';
	export let description = '';
	export let category = '';

	onMount(() => {
		invalidateAll();
	});
</script>

<Meta title={`S-UI - ${title}`} {description} />

<div class="flex w-full">
	<div class="flex flex-col p-8 overflow-y divide-y divide-gray-200">
		<DocHeader {title} {description} {category} />
		<div id="mainContent" class="pb-6">
			<slot />
		</div>
	</div>
</div>
