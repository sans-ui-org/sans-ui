<script lang="ts">
	import { Link } from '$lib';
	import {
		SUI_GITHUB_URL,
		SUI_FIGMA_URL,
		SUI_LICENCE_URL,
		SUI_EMAIL_URL
	} from '../utils/constants';
	import Logo from '../utils/icons/LogoSans.svelte';
</script>

<footer>
	<div class="flex flex-row justify-between items-end gap-4 pt-14 pb-4 px-8 mb-12">
		<div class="flex flex-col gap-6">
			<Link href="/">
				<Logo fill_1="#231f20" fill_2="#427cbf" fill_3="#2e3192" size={140}></Logo>
			</Link>
			<p>
				<Link href={SUI_EMAIL_URL}>three.s.ui.org@gmail.com</Link>
			</p>
		</div>
		<div class="flex flex-row gap-12">
			<!-- Contents -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Contents</h2>
				<ul class="inline-flex flex-col items-center gap-1">
					<li><Link href={SUI_GITHUB_URL}>GitHub</Link></li>
					<li>
						<Link href={SUI_FIGMA_URL}>Figma</Link>
					</li>
				</ul>
			</div>
			<!-- Community -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Community</h2>
				<ul class="inline-flex flex-col items-center gap-1">
					<!-- <li><Link href={SUI_DISCORD_URL}>Discord</Link></li> -->
				</ul>
			</div>
			<!-- LICENCE -->
			<div class="flex flex-col gap-2">
				<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white">Contents</h2>
				<ul class="inline-flex flex-col items-center gap-1">
					<li><Link href={SUI_LICENCE_URL}>Licence</Link></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- Copyright -->
	<p class="text-sm text-gray-500 dark:text-gray-400 border-t-2 py-2 text-center">
		&copy; 2024 SanS-UI. All rights reserved.
	</p>
</footer>
