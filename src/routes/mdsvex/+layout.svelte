<script context="module">
	import h2 from './semantics/h2.svelte';
	import h3 from './semantics/h3.svelte';
	import p from './semantics/p.svelte';
	export { h2, h3, p };
</script>

<script>
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { Link } from '$lib';
	import Meta from './components/Meta.svelte';
	import DocHeader from './components/DocHeader.svelte';
	import Footer from '../global-components/Footer.svelte';

	/** @type {string} */
	export let title = '';
	/** @type {string} */
	export let description = '';
	/** @type {string} */
	export let category = '';
	/** @type {{ slug: string, title: string, level: number }[]} */
	export let toc = [];

	onMount(() => {
		invalidateAll();
	});
</script>

<Meta title={`S-UI - ${title}`} {description} />

<div class="flex w-full justify-center">
	<!-- Component documentation -->
	<div
		class="flex flex-col w-[calc(100%-256px)] max-w-4xl mx-auto p-8 overflow-y divide-y divide-gray-200 overflow-y-auto"
	>
		<DocHeader {title} {description} {category} />
		<div id="mainContent" class="pb-24">
			<slot />
		</div>
		<Footer />
	</div>
	<!-- TOC -->
	<aside
		class="overflow-y-auto scrolling-touch w-64 h-[calc(100vh-57px)] block sticky top-[57px] border-r bg-white"
	>
		<nav class="p-8">
			<h4 class="mb-4 font-semibold uppercase">On this page</h4>
			<ul class="flex flex-col gap-2">
				{#each toc as { slug, title, level }}
					<li
						class="block pl-2 border-l-4 border-transparent hover:border-blue-500 transition duration-300 cursor-pointer"
						style={`margin-left: calc(${level}rem)`}
					>
						<Link underlineType="none" href={`#${slug}`} class="text-sm">
							{title}
						</Link>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
</div>
