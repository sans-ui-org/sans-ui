<script>
	import { onMount } from 'svelte';
	import { Button, Tooltip, typewriter } from '$lib';
	import Footer from './global-components/Footer.svelte';

	export let data;

	// Just for the sake of showing typewriter effect...
	let showTitle = false;
	onMount(() => {
		showTitle = true;

		return () => {
			showTitle = false;
		};
	});
</script>

<main class="block">
	<!-- Hero section -->
	<div class="w-full flex flex-col items-center gap-16 p-8 my-36">
		<h1 class="text-5xl font-light">Welcome to S-UI.</h1>
		<h3 class="text-xl font-light text-center">
			This is an official S-UI library documentation.<br />
			{#if showTitle}
				<span class="text-xl font-light text-center" transition:typewriter={{ speed: 1.5 }}>
					Contributions are more than welcome! ^_^
				</span>
			{/if}
		</h3>
		<Button size="lg" href="/docs/installation">Let's get started</Button>
		<!-- GitHub stars, NPM downloads, Figma duplicates -->
		<div class="">
			<div class="flex flex-row items-center gap-8">
				<div class="flex flex-col items-center gap-4">
					<h3 class="text-4xl font-light">{data.repoInfo.stargazers_count}</h3>
					<p class="text-xl text-gray-500">GitHub Stars</p>
				</div>
				<div class="flex flex-col items-center gap-4">
					<h3 class="text-4xl font-light">{data.repoInfo.stargazers_count}</h3>
					<p class="text-xl text-gray-500">NPM Downloads</p>
				</div>
			</div>
		</div>
	</div>

	<hr />
	<!-- Contributors -->
	<div class="flex flex-col items-center mx-32 my-16">
		<div class="flex flex-col gap-8 mb-14 text-center">
			<h3 class="text-4xl font-light">S-UI Contributors</h3>
			<p class="text-xl text-gray-500">
				Let's join the open-source community by contributing to S-UI and become one of the
				highlighted members.
			</p>
		</div>
		<div class="flex flex-row items-center justify-center gap-8">
			{#each data.contributors as contributor}
				<Tooltip variant="secondary" title={contributor.login} class="transition hover:scale-[1.1]">
					<a href={contributor.html_url}>
						<img
							src={contributor.avatar_url}
							alt={contributor.login}
							class="w-16 h-16 rounded-full border"
						/>
					</a>
				</Tooltip>
			{/each}
		</div>
	</div>
	<hr />
</main>

<!-- Footer -->
<Footer />
