<script lang="ts">
	import { Link } from '$lib';

	export let toc: { slug: string; title: string; level: number }[] = [];
</script>

<aside class="sticky top-[57px] overflow-y-auto scrolling-touch w-56 h-[calc(100vh-57px)]">
	<nav class="py-8">
		<h4 class="mb-4 font-semibold capitalize dark:text-white">On this page</h4>
		<ul class="flex flex-col gap-2">
			{#each toc as { slug, title, level }}
				<li
					class="block pl-2 border-l-4 border-transparent hover:border-blue-500 transition duration-300 cursor-pointer"
					style={`margin-left: calc(${level}rem)`}
				>
					<Link
						variant="secondary"
						underlineType="none"
						href={`#${slug}`}
						class="block text-sm dark:text-neutral-300 dark:hover:text-neutral-100 dark:visited:text-neutral-300"
					>
						{title}
					</Link>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
