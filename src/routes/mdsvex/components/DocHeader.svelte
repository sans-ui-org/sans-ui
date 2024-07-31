<script>
	import { SUI_GITHUB_URL } from '../../utils/constants';
	import Github from '../../utils/icons/Github.svelte';

	export let title = '';
	export let description = '';
	export let category = '';
	export let githubFolder = '';
</script>

<div class="pb-8">
	<p class="uppercase mb-6 text-blue-500 font-semibold">{category}</p>
	<h1
		class="inline-block mb-4 font-extrabold tracking-tight text-gray-900 dark:text-white text-4xl"
	>
		{title}.
	</h1>

	<p class="text-lg text-gray-600">{description}</p>

	{#if githubFolder}
		<a
			class="inline-flex items-center gap-2 border rounded-full pl-4 pr-6 py-1 mt-8 text-sm font-semibold bg-gray-100 hover:bg-gray-200 transition duration-200"
			href={SUI_GITHUB_URL + '/blob/main/src/lib' + githubFolder}
			target="_blank"
		>
			<Github size="lg" />
			<span>Source code in GitHub</span>
		</a>
	{/if}
</div>
