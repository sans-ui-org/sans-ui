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
	import Logo from '../utils/icons/LogoSans.svelte';
</script>

<footer>
	<div class="flex flex-row justify-between items-end gap-4 pt-14 pb-4 px-8 mb-12">
		<div class="flex flex-col gap-6">
			<Link href="/">
				<Logo size={140} class="dark:text-white text-black"></Logo>
			</Link>
			<p>
				<Link href={SANS_EMAIL_URL}>three.s.ui.org@gmail.com</Link>
			</p>
		</div>
		<div class="flex flex-row gap-12">
			<!-- Contents -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Contents</h2>
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
					<li><Link href={SANS_TWITTER_URL} external={true}>X</Link></li>
					<li><Link href={SANS_DEVTO_URL} external={true}>Dev</Link></li>
					<li><Link href={SANS_MEDIUM_URL} external={true}>Medium</Link></li>
					<li><Link href={SANS_HASHNODE_URL} external={true}>Hashnode</Link></li>
				</ul>
			</div>
			<!-- LICENCE -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Contents</h2>
				<ul class="inline-flex flex-col items-center gap-1">
					<li><Link href={SANS_UI_LICENCE_URL} external={true}>Licence</Link></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- Copyright -->
	<p class="text-sm text-gray-500 dark:text-gray-400 border-t-2 py-4 text-center">
		&copy; 2024 SanS-UI. All rights reserved.
	</p>
</footer>
