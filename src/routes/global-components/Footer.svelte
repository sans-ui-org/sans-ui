<script lang="ts">
	import { Link } from '$lib';
	import { SANS_UI_GITHUB_URL, SANS_UI_FIGMA_URL, SANS_UI_LICENCE_URL } from '../utils/constants';
	import {
		SANS_DISCORD_URL,
		SANS_TWITTER_URL,
		SANS_DEVTO_URL,
		SANS_MEDIUM_URL,
		SANS_HASHNODE_URL,
		SANS_EMAIL_URL
	} from '../utils/constants';
	import LogoSans from '../utils/icons/LogoSans.svelte';
</script>

<footer class="border-t-2">
	<div class="flex flex-row justify-center gap-32 items-start pt-14 pb-4 px-8 mb-12">
		<div class="flex flex-col gap-6 w-[300px]">
			<Link href="/">
				<LogoSans size={140} class="dark:text-white text-black"></LogoSans>
			</Link>
			<div class="flex flex-col gap-2">
				<p class="text-sm text-gray-600 font-light dark:text-neutral-100">
					We are still in the early stages of development, and we would greatly appreciate your
					opinions or feedback. Please feel free to reach out to us.
				</p>
				<p>
					<Link size="sm" href={SANS_EMAIL_URL}>Let us know your opinion</Link>
				</p>
			</div>
		</div>
		<div class="flex flex-row gap-12">
			<!-- Contents -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Explore</h2>
				<ul class="inline-flex flex-col items-center gap-1">
					<li><Link href={SANS_UI_GITHUB_URL} external={true}>GitHub</Link></li>
					<li>
						<Link href={SANS_UI_FIGMA_URL} external={true}>Figma</Link>
					</li>
				</ul>
			</div>
			<!-- Community -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Community</h2>
				<ul class="inline-flex flex-col items-center gap-1">
					<li><Link href={SANS_DISCORD_URL} external={true}>Discord</Link></li>
					<li><Link href={SANS_TWITTER_URL} external={true}>X (Twitter)</Link></li>
					<li><Link href={SANS_DEVTO_URL} external={true}>Dev</Link></li>
					<li><Link href={SANS_MEDIUM_URL} external={true}>Medium</Link></li>
					<li><Link href={SANS_HASHNODE_URL} external={true}>Hashnode</Link></li>
				</ul>
			</div>
			<!-- LICENCE -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Policy</h2>
				<ul class="inline-flex flex-col items-center gap-1">
					<li><Link href={SANS_UI_LICENCE_URL} external={true}>Licence</Link></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- Copyright -->
	<p class="text-sm text-gray-500 dark:text-gray-400 py-4 text-center">
		&copy; 2024 SanS UI. All rights reserved.
	</p>
</footer>
