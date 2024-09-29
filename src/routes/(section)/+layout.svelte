<script lang="ts" context="module">
	export type AccordionTitle = 'Documentation' | 'Component' | 'Action';
	export type AccordionData = {
		menu: {
			title: AccordionTitle;
			items: {
				title: string;
				slug: string;
			}[];
		}[];
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { SideNav } from '../global-components';

	/** @type {import('./$types').PageData} */
	export let data: AccordionData;

	// Smooth scroll to anchor with considering the fixed header.
	// ref: https://www.geeksforgeeks.org/offsetting-an-anchor-to-adjust-for-fixed-header/
	onMount(() => {
		// Get the header element
		let header = document.querySelector('header') as HTMLElement;

		// Get the height of the header
		let headerHeight = header.offsetHeight + 24; // This space is for better user experience.
		let anchors = document.querySelectorAll('a[href^="#"]') as unknown as HTMLAnchorElement[];
		anchors.forEach((anchor) => {
			anchor.addEventListener('click', function (event) {
				event.preventDefault();

				// Get the target element that
				// the anchor link points to
				let href = this.getAttribute('href');
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
	});
</script>

<div class="flex flex-row justify-between gap">
	<!-- Sidebar -->
	<SideNav {data} />
	<!-- Content -->
	<slot />
</div>
