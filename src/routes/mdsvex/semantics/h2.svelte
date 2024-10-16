<script lang="ts">
	let content: string = '';
	let slug: string = '';

	function init(node: HTMLElement) {
		content = node.firstChild?.childNodes[0].nodeValue ?? '';
		slug = content.replace(/\s/g, '-').toLowerCase();
	}
</script>

<h2 class="text-gray-900 text-2xl font-bold mt-12 mb-2 dark:text-white" use:init>
	<a id={slug} class="group relative" href="#{slug}" aria-label={content}>
		<slot />
		<span
			class="absolute left-[-24px] text-blue-600 items-center opacity-0 transition duration-200 group-hover:opacity-100 group-focus:opacity-100"
		>
			#
		</span>
	</a>
</h2>
