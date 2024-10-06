<script lang="ts">
	import { onMount } from 'svelte';
	import { SANS_DISCORD_URL, SANS_UI_GITHUB_URL, SANS_TWITTER_URL } from '../utils/constants';
	import { GithubIcon, TwitterIcon, DiscordIcon, MoonIcon, SunIcon } from '../icons';
	import { Link } from '$lib';
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
				<Logo size={100} class="dark:text-white text-black"></Logo>
			</Link>
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
						on:click={toggleTheme}><MoonIcon size={18} /></button
					>
				{:else}
					<button
						class="flex items-center justify-center p-2 rounded-full transition duration-200 hover:bg-gray-200 dark:hover:bg-neutral-500"
						on:click={toggleTheme}><SunIcon size={18} /></button
					>
				{/if}
				<div class="flex">
					<a
						class="justify-center p-2 rounded-full transition duration-200 hover:bg-gray-200 dark:hover:bg-neutral-500"
						href={SANS_UI_GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						><GithubIcon size={24} class="text-black dark:text-neutral-100" /></a
					>
					<a
						class="justify-center p-2 rounded-full transition duration-200 hover:bg-gray-200 dark:hover:bg-neutral-500"
						href={SANS_DISCORD_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<DiscordIcon size={24} class="text-[#7289DA]" />
					</a>
					<a
						class="justify-center p-2 rounded-full transition duration-200 hover:bg-gray-200 dark:hover:bg-neutral-500"
						href={SANS_TWITTER_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<TwitterIcon size={24} class="text-[#00ACEE]" />
					</a>
				</div>
			</li>
		</ul>
	</nav>
</header>
