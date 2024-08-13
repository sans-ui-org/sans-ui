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
	import SideNav from '../global-components/SideNav.svelte';

	/** @type {import('./$types').PageData} */
	export let data: AccordionData;
</script>

<div class="flex flex-row justify-between gap">
	<!-- Sidebar -->
	<SideNav {data} />
	<!-- Content -->
	<slot />
</div>
