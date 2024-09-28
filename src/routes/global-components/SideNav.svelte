<script lang="ts">
	import { Accordion, AccordionItem, Link } from '$lib';
	import { onMount } from 'svelte';
	import type { AccordionData, AccordionTitle } from '../(section)/+layout.svelte';
	import { cn } from '$lib/utils/cn';
	import DocSearch from './DocSearch.svelte';

	/** @type {import('./$types').PageData} */
	export let data: AccordionData;

	let accordionOpen = {
		Documentation: false,
		Component: false,
		Action: false
	};

	onMount(() => {
		accordionOpen = {
			Documentation: localStorage.getItem('Accordion-Documentation') === 'true',
			Component: localStorage.getItem('Accordion-Component') === 'true',
			Action: localStorage.getItem('Accordion-Action') === 'true'
		};

		return () => {};
	});

	// Cache the state in localStorage
	const onClick = (title: AccordionTitle) => {
		const currentState = !accordionOpen[title];
		localStorage.setItem(`Accordion-${title}`, currentState.toString());
	};
</script>

<aside
	class="overflow-y-auto scrolling-touch w-64 h-[calc(100vh-57px)] block sticky top-[57px] border-r dark:text-neutral-100"
>
	<DocSearch class="flex justify-center h-9 px-3 mr-1 mt-4 mb-2" />
	<nav>
		{#each data.menu as menu}
			<Accordion
				title={menu.title}
				bind:open={accordionOpen[menu.title]}
				on:click={() => onClick(menu.title)}
				class={'dark:text-neutral-100'}
			>
				{#each menu.items as item}
					<AccordionItem
						class={cn(
							'border-l-4 transition duration-200 hover:bg-neutral-200 dark:hover:bg-gray-600',
							window.location.pathname === item.slug
								? 'border-blue-500 bg-gray-100 dark:bg-gray-600'
								: 'border-transparent'
						)}
					>
						<Link
							underlineType="none"
							variant="secondary"
							href={item.slug}
							class={cn(
								'w-full h-8 flex items-center pl-4 dark:text-neutral-300 dark:hover:text-neutral-100 dark:visited:text-neutral-300',
								window.location.pathname === item.slug
									? 'dark:text-neutral-100  dark:hover:text-neutral-100 dark:visited:text-neutral-100'
									: ''
							)}>{item.title}</Link
						>
					</AccordionItem>
				{/each}
			</Accordion>
		{/each}
	</nav>
</aside>
