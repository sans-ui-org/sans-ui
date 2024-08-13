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
	import Footer from '../global-components/Footer.svelte';
	import TableOfContent from '../global-components/TableOfContent.svelte';

	/** @type {string} */
	export let title = '';
	/** @type {string} */
	export let description = '';
	/** @type {string} */
	export let category = '';
	/** @type {string} */
	export let githubFolder = '';
	/** @type {{ slug: string, title: string, level: number }[]} */
	export let toc = [];

	onMount(() => {
		invalidateAll();
	});
</script>

<Meta title={`S-UI - ${title}`} {description} />

<div class="flex flex-col w-[calc(100%-480px)] px-12 py-8 divide-y divide-gray-200 overflow-y-auto">
	<DocHeader {title} {description} {category} {githubFolder} />
	<div id="mainContent" class="pb-24">
		<slot />
	</div>
	<Footer />
</div>
<!-- TOC -->
<TableOfContent {toc} />
