<script lang="ts">
	import { Accordion, AccordionItem, Link } from '$lib';
	import Footer from '../global-components/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-row">
	<!-- Sidebar -->
	<div class="fixed w-64 h-[calc(100vh-57px)] border-r bg-white">
		<Accordion title="Documentations">
			{#each data.gettingStartedMenu as item}
				<AccordionItem>
					<Link
						underlineType="none"
						variant="secondary"
						href={`/docs/${item.slug}`}
						class="w-full h-9 flex items-center pl-4 hover:bg-gray-100">{item.title}</Link
					>
				</AccordionItem>
			{/each}
		</Accordion>
		<Accordion title="Components">
			{#each data.componentMenu as component}
				<AccordionItem>
					<Link
						underlineType="none"
						variant="secondary"
						href={`/components/${component.slug}`}
						class="w-full h-9 flex items-center pl-4 hover:bg-gray-100">{component.title}</Link
					>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
	<!-- Content -->
	<div class="w-[calc(100%-256px)] ml-auto">
		<slot />
		<!-- Footer -->
		<Footer />
	</div>
</div>
