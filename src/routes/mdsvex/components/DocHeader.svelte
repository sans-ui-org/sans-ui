<script>
	export let title = '';
	export let description = '';
	export let category = '';
</script>

<div class="pb-8">
	<p class="uppercase mb-6 text-blue-500 font-semibold">{category}</p>
	<h1
		class="inline-block mb-4 font-extrabold tracking-tight text-gray-900 dark:text-white text-4xl"
	>
		{title}.
	</h1>

	<p class="text-lg text-gray-600">{description}</p>
</div>
