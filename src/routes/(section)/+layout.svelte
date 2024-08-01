<script lang="ts" context="module">
	type AccordionTitle = 'Documentation' | 'Component' | 'Action';
	type AccordionData = {
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
	import { afterNavigate } from '$app/navigation';
	import { Accordion, AccordionItem, Link } from '$lib';
	import { twMerge } from 'tailwind-merge';

	/** @type {import('./$types').PageData} */
	export let data: AccordionData;

	let activeHref = '';

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
	});

	afterNavigate((navigation) => {
		activeHref = navigation.to?.url.pathname ?? '';
	});

	// Cache the state in localStorage
	const onClick = (title: AccordionTitle) => {
		const currentState = !accordionOpen[title];
		localStorage.setItem(`Accordion-${title}`, currentState.toString());
	};
</script>

<!-- Documentation -->
<div class="flex flex-row">
	<!-- Sidebar -->
	<aside
		class="overflow-y-auto scrolling-touch w-64 h-[calc(100vh-57px)] block sticky top-[57px] border-r bg-gray-100"
	>
		<nav>
			{#each data.menu as menu}
				<Accordion
					title={menu.title}
					bind:open={accordionOpen[menu.title]}
					on:click={() => onClick(menu.title)}
				>
					{#each menu.items as item}
						<AccordionItem
							class={twMerge(
								'border-l-4 transition duration-300 hover:bg-neutral-200',
								activeHref === item.slug ? 'border-blue-500 bg-neutral-200' : 'border-transparent'
							)}
						>
							<Link
								underlineType="none"
								variant="primary"
								href={item.slug}
								class={twMerge('w-full h-9 flex items-center pl-4')}>{item.title}</Link
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
