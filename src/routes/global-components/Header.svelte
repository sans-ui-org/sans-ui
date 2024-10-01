<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/components/link/Link.svelte';
	import { SUI_GITHUB_URL } from '../utils/constants';
	import Github from '../utils/icons/Github.svelte';
	import Light from '../utils/icons/Light.svelte';
	import Night from '../utils/icons/Night.svelte';
	import Logo from '../utils/icons/LogoSans.svelte';

	let mode: 'light' | 'dark' | null | undefined;

	const toggleTheme = () => {
		mode = mode === 'light' ? 'dark' : 'light';

		document.documentElement.classList.remove(mode === 'light' ? 'dark' : 'light');
		document.documentElement.classList.add(mode);

		localStorage.setItem('theme', mode);
	};

	onMount(() => {
		// check LS which theme should be applied throughout the application.
		const cachedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
		if (cachedTheme) {
			mode = cachedTheme;
		} else {
			mode = 'light';
		}

		document.documentElement.classList.remove(mode === 'light' ? 'dark' : 'light');
		document.documentElement.classList.add(mode);
	});
</script>

<header
	class="sticky top-0 flex-none w-full mx-auto bg-white border-b border-gray-200 z-20 dark:bg-neutral-800 dark:text-white"
>
	<nav class="flex flex-row items-center justify-between py-2 px-8">
		<div class="flex flex-row gap-4">
			<Link href="/">
				<Logo fill_1="#231f20" fill_2="#427cbf" fill_3="#2e3192" size={100}></Logo>
			</Link>
			<!-- TODO: Let's automate... i.e. GitHub API? release number fetching?? -->
			<span>ver. 0.0.1</span>
		</div>
		<ul class="flex gap-8">
			<div class="flex gap-8">
				<li class="flex items-center">
					<Link
						underlineType="hover"
						href="/docs/getting-started"
						class="dark:text-white dark:visited:text-white">Docs</Link
					>
				</li>
				<li class="flex items-center">
					<Link
						underlineType="hover"
						href="/components/button"
						class="dark:text-white dark:visited:text-white">Components</Link
					>
				</li>
			</div>
			<li class="flex flex-row items-center justify-center gap-4">
				{#if mode === 'light'}
					<button
						class="flex items-center justify-center p-2 rounded-full transition duration-200 hover:bg-gray-200 dark:hover:bg-neutral-500"
						on:click={toggleTheme}><Night size={18} /></button
					>
				{:else}
					<button
						class="flex items-center justify-center p-2 rounded-full transition duration-200 hover:bg-gray-200 dark:hover:bg-neutral-500"
						on:click={toggleTheme}><Light size={18} /></button
					>
				{/if}
				<a
					class="flex items-center justify-center p-2 rounded-full transition duration-200 hover:bg-gray-200 dark:hover:bg-neutral-500"
					href={SUI_GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"><Github size={24} /></a
				>
				<!-- TODO: Github star number here? -->
				<!-- <Link href={SUI_DISCORD_URL} target="_blank">
						<Discord size="lg" />
					</Link> -->
			</li>
		</ul>
	</nav>
</header>
