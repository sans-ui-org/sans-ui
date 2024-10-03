<script lang="ts">
	import { Button, Link, Tooltip } from '$lib';
	import { Footer } from './global-components';
	import { goto } from '$app/navigation';
	import { SANS_TWITTER_URL, SUI_DISCORD_URL, SANS_UI_GITHUB_URL } from './utils/constants';
	import { DiscordIcon, GithubIcon, TwitterIcon } from './icons';

	export let data;

	const onCopyCodeBlock = async () => {
		const tooltip = document.querySelector('[data-tooltip="true"]') as HTMLDivElement;
		const code = 'npm install sans-ui';

		// Copy and paste
		await window.navigator.clipboard.writeText(code);

		// Change text to "Copied!" temporarily.absolute
		if (tooltip) {
			const tooltipContent = tooltip.childNodes[0];
			tooltipContent.textContent = 'Copied !';
			setTimeout(() => (tooltipContent.textContent = 'Copy this to get started!'), 3000);
		}
	};
</script>

<main class="block">
	<!-- Hero section -->
	<div class="w-full flex flex-col items-center gap-16 p-8 mt-36">
		<div>
			<h1 class="text-5xl text-center font-semibold dark:text-white">
				Seamless <span class="">Svelte</span> UI with<br />
				<span
					class="bg-gradient-to-r from-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text"
					>SanS UI</span
				> components
			</h1>
		</div>
		<h3 class="text-xl font-light text-center dark:text-neutral-100">
			Boost your Svelte projects with modular UI components built on Tailwind CSS. <br />Create
			smooth, responsive designs that fit perfectly with your development needs.
		</h3>
		<div class="flex flex-col items-center gap-8">
			<Button
				classes={{
					base: 'bg-gradient-to-r from-blue-500 to-indigo-400 font-semibold'
				}}
				size="lg"
				on:click={() => goto('/docs/installation')}>Get Started</Button
			>
			<!-- <DocSearch class="h-12" /> -->
			<div
				{...$$restProps}
				class={'rounded-lg border border-neutral-400 dark:border-neutral-500 bg-white dark:border-neutral-500'}
			>
				<div class="flex pr-1 justify-between items-center">
					<pre
						class="language-svelte pt-2 pl-3 pr-3"
						style="color: rgb(115 115 115)">$ npm install sans-ui</pre>
					<Tooltip
						variant="secondary"
						size="sm"
						title="Copy this to get started!"
						on:click={onCopyCodeBlock}
					>
						<div
							class="p-1.5 text-sm text-white border-neutral-400 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition duration-200"
						>
							<svg
								class="w-[12px] h-[12px] cursor-pointer"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1222_36543)">
									<path
										d="M10 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V10C0.5 10.5523 0.947715 11 1.5 11H10C10.5523 11 11 10.5523 11 10V1.5C11 0.947715 10.5523 0.5 10 0.5Z"
										stroke="black"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M13.5 3.5V12.5C13.5 12.7652 13.3946 13.0196 13.2071 13.2071C13.0196 13.3946 12.7652 13.5 12.5 13.5H3.5"
										stroke="black"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</svg>
						</div>
					</Tooltip>
				</div>
			</div>
		</div>

		<hr />

		<!-- Contributors, GitHub stars, NPM downloads -->
		<div class="flex flex-col items-center mx-32 my-16">
			<div class="flex flex-col gap-8 mb-14 text-center">
				<h3 class="text-5xl text-center font-semibold dark:text-white">
					Join the SanS UI <span
						class="bg-gradient-to-r from-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text"
						>Contributors</span
					>
				</h3>
				<p class="text-xl font-light text-center dark:text-neutral-100">
					Become a part of the SanS UI open-source community! <Link
						href=""
						variant="secondary"
						class="text-xl font-light text-center dark:text-neutral-100"
						>Contribute to the project</Link
					>
					and be recognized as one of our featured contributors.
				</p>
			</div>
			<div class="flex flex-row items-center justify-center gap-2">
				{#each data.contributors as contributor}
					<Tooltip variant="secondary" title={contributor.login} class="transition">
						<a class="transition hover:scale-[1.05]" href={contributor.html_url}>
							<img
								src={contributor.avatar_url}
								alt={contributor.login}
								class="w-14 h-14 rounded-full border"
							/>
						</a>
					</Tooltip>
				{/each}
			</div>
			<!-- Contributors, Github stars -->
			<div class="mt-24">
				<div class="flex flex-row items-center gap-8">
					<div class="flex flex-col items-center gap-4 dark:text-white">
						<h3 class="text-4xl font-light">{data.repoInfo.stargazers_count}</h3>
						<p class="text-xl text-gray-500 dark:text-neutral-200">GitHub Stars</p>
					</div>
					<div class="flex flex-col items-center gap-4">
						<h3 class="text-4xl font-light dark:text-white">{data.repoInfo.stargazers_count}</h3>
						<p class="text-xl text-gray-500 dark:text-neutral-200">NPM Downloads</p>
					</div>
				</div>
			</div>
		</div>

		<hr />

		<!-- GitHub stars, NPM downloads, Figma duplicates -->
		<div class="flex flex-col items-center mx-32 my-16">
			<div class="flex flex-col gap-8 mb-14 text-center">
				<h3 class="text-5xl text-center font-semibold dark:text-white">
					Our <span
						class="bg-gradient-to-r from-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text"
						>Community</span
					>
				</h3>
				<p class="text-xl font-light text-center dark:text-neutral-100">
					Let's be part of our community! everyone is invited to contribute in your way!
				</p>
			</div>
			<!-- Twitter, Discord, Github -->
			<div class="flex flex-col gap-4">
				<!-- Github -->
				<div class="shadow border rounded-lg bg-white hover:bg-neutral-50">
					<a
						href={SANS_UI_GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-col gap-2 p-4 rounded"
					>
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-2">
								<GithubIcon size={28} class="text-black" />
								<p class="text-xl font-semibold text-neutral-800">Github</p>
							</div>
							<p class="text-sm font-light">
								To report bugs, request features and contribute to the project.
							</p>
						</div>
					</a>
				</div>
				<!-- Twitter -->
				<div class="shadow border rounded-lg bg-white hover:bg-neutral-50">
					<a
						href={SANS_TWITTER_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-col gap-2 p-4 rounded"
					>
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-2">
								<TwitterIcon size={28} class="text-[#00ACEE]" />
								<p class="text-xl font-semibold text-neutral-800">X (Twitter)</p>
							</div>
							<p class="text-sm font-light">For announcements, tips and general information.</p>
						</div>
					</a>
				</div>
				<!-- Discord -->
				<div class="shadow border rounded-lg bg-white hover:bg-neutral-50">
					<a
						href={SUI_DISCORD_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-col gap-2 p-4 rounded"
					>
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-2">
								<DiscordIcon size={28} class="text-[#7289DA]" />
								<p class="text-xl font-semibold text-neutral-800">Discord</p>
							</div>
							<p class="text-sm font-light">
								To get involved in the community, ask questions and share tips.
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>

		<hr />
	</div>
</main>

<!-- Footer -->

<Footer />
