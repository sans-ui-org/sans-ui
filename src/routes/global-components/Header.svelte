<script lang="ts">
	import { goto } from '$app/navigation';
	import Link from '$lib/link/Link.svelte';
	import { SUI_GITHUB_URL } from '../utils/constants';
	import Github from '../utils/icons/Github.svelte';

	const toggleTheme = (ev: MouseEvent) => {
		const target = ev.target as HTMLElement;
		const isDark = target.ownerDocument.documentElement.classList.toggle('dark');
		if (target.ownerDocument === document)
			// we are NOT in the iFrame
			localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
	};
	const onPushHome = () => {
		goto('/', { invalidateAll: true });
	};
</script>

<header class="sticky top-0 flex-none w-full mx-auto bg-white border-b border-gray-200 z-20">
	<nav class="flex flex-row items-center justify-between py-4 px-8">
		<div class="flex flex-row gap-4">
			<!-- TODO: Icon? -->
			<button on:click={onPushHome}><strong>S-UI</strong></button>
			<!-- TODO: Let's automate... i.e. GitHub API? release number fetching?? -->
			<span>ver. 0.0.1</span>
		</div>
		<ul class="flex flex-row gap-7">
			<li><Link underlineType="hover" href="/docs/getting-started">Docs</Link></li>
			<li><Link underlineType="hover" href="/components/button">Components</Link></li>
			<li class="flex flex-row items-center gap-4">
				<Link variant="secondary" href={SUI_GITHUB_URL} target="_blank">
					<Github size="lg" />
					<!-- TODO: Github star number here? -->
				</Link>
				<!-- <Link href={SUI_DISCORD_URL} target="_blank">
						<Discord size="lg" />
					</Link> -->
			</li>
		</ul>
	</nav>
</header>
