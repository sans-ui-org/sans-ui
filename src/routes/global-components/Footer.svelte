<script lang="ts">
	import { Link } from '$lib';
	import { SUI_GITHUB_URL, SUI_FIGMA_URL, SUI_LICENCE_URL } from '../utils/constants';
</script>

<footer>
	<div class="flex flex-col justify-center items-center gap-4 pt-14 pb-24">
		<div class="flex flex-row gap-12 mb-12">
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
		<!-- Copyright -->
		<p class="text-sm text-gray-500 dark:text-gray-400">&copy; 2024 SanS-UI. All rights reserved.</p>
	</div>
</footer>
