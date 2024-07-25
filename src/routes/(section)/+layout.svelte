<script lang="ts">
	import { Accordion, AccordionItem, Link } from '$lib';
	import Footer from '../global-components/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<!-- Documentation -->

<div class="flex flex-row">
	<!-- Sidebar -->
	<div class="fixed w-64 h-[calc(100vh-57px)] border-r bg-white overflow-y-auto">
		<!-- Documentation -->
		<Accordion title="Documentations">
			{#each data.documentationMenu as item}
				<AccordionItem>
					<Link
						underlineType="hover"
						variant="primary"
						href={`/docs/${item.slug}`}
						class="w-full h-9 flex items-center pl-4">{item.title}</Link
					>
				</AccordionItem>
			{/each}
		</Accordion>
		<!-- Component -->
		<Accordion title="Components">
			{#each data.componentMenu as component}
				<AccordionItem>
					<Link
						underlineType="hover"
						variant="primary"
						href={`/components/${component.slug}`}
						class="w-full h-9 flex items-center pl-4">{component.title}</Link
					>
				</AccordionItem>
			{/each}
		</Accordion>
		<!-- Actions -->
		<Accordion title="Actions">
			{#each data.actionsMenu as component}
				<AccordionItem>
					<Link
						underlineType="hover"
						variant="primary"
						href={`/actions/${component.slug}`}
						class="w-full h-9 flex items-center pl-4">{component.title}</Link
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
