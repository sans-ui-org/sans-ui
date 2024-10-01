<script>
	import { cn } from '$lib/utils/cn';
	import { SUI_GITHUB_URL } from '../../utils/constants';
	import { GithubIcon } from '../../icons';

	export let title = '';
	export let description = '';
	export let category = '';
	export let githubFolder = '';
</script>

<div class="pb-8">
	<p class="uppercase mb-6 text-blue-500 dark:text-blue-400 font-semibold">{category}</p>
	<h1
		class="inline-block mb-4 font-extrabold tracking-tight text-gray-900 dark:text-white text-4xl"
	>
		{title}
	</h1>

	<p class="text-lg text-gray-600 dark:text-neutral-200">{description}</p>

	{#if githubFolder}
		<a
			class={cn(
				'inline-flex items-center gap-2 rounded-full pl-3 pr-5 py-1.5 mt-6 text-sm font-semibold bg-gray-100 transition duration-200',
				'hover:bg-gray-200',
				'dark:text-white dark:bg-neutral-600 dark:hover:bg-gray-500'
			)}
			href={SUI_GITHUB_URL + '/blob/development/src/lib/components' + githubFolder}
			target="_blank"
		>
			<GithubIcon size={24} />
			<span>Source code in GitHub</span>
		</a>
	{/if}
</div>
