<script context="module">
	import h2 from './semantics/h2.svelte';
	import h3 from './semantics/h3.svelte';
	import p from './semantics/p.svelte';
	import ul from './semantics/ul.svelte';
	export { h2, h3, p, ul };
</script>

<script>
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import Meta from './components/Meta.svelte';
	import DocHeader from './components/DocHeader.svelte';
	import { Footer, TableOfContent } from '../global-components';

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

		// ref: https://www.geeksforgeeks.org/offsetting-an-anchor-to-adjust-for-fixed-header/
		let header = document.querySelector('header');
		if (header) {
			// Get the height of the header
			let headerHeight = header.offsetHeight + 24; // This space is for better user experience.
			let anchors = document.querySelectorAll('a[href^="#"]');
			anchors.forEach((anchor) => {
				anchor.addEventListener('click', (event) => {
					event.preventDefault();

					// Get the target element that
					// the anchor link points to
					let href = anchor.getAttribute('href');
					if (href !== null) {
						let target = document.querySelector(href);
						if (target) {
							let targetPosition = target.getBoundingClientRect().top - headerHeight;

							window.scrollTo({
								top: targetPosition + window.pageYOffset,
								behavior: 'smooth'
							});
						}
					}
				});
			});
		}
	});
</script>

<Meta title={`SanS-UI - ${title}`} {description} />

<div class="flex flex-col w-[calc(100%-480px)] px-12 py-8 divide-y divide-gray-200 overflow-y-auto">
	<DocHeader {title} {description} {category} {githubFolder} />
	<div id="mainContent" class="pb-24">
		<slot />
	</div>
	<Footer />
</div>
<!-- TOC -->
<TableOfContent {toc} />
