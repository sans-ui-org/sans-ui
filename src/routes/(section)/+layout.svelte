<script lang="ts">
	import { Accordion, AccordionItem, Link } from '$lib';
	import Footer from '../global-components/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<!-- Documentation -->
<div class="flex flex-row">
	<!-- Sidebar -->
	<aside
		class="overflow-y-auto scrolling-touch w-64 h-[calc(100vh-57px)] block sticky top-[57px] border-r bg-gray-100"
	>
		<nav>
			{#each data.menu as menu}
				<Accordion title={menu.title}>
					{#each menu.items as item}
						<AccordionItem>
							<Link
								underlineType="none"
								variant="primary"
								href={item.slug}
								class="w-full h-9 flex items-center pl-4 border-l-4 border-transparent hover:border-blue-500 transition duration-300"
								>{item.title}</Link
							>
						</AccordionItem>
					{/each}
				</Accordion>
			{/each}
		</nav>
	</aside>
	<!-- Content -->
	<div class="w-[calc(100%-256px)]">
		<slot />
	</div>
</div>
