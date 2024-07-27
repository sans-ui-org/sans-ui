<script lang="ts">
	let content: string = '';
	let slug: string = '';

	function init(node: HTMLElement) {
		content = node.firstChild?.childNodes[2].nodeValue ?? '';
		slug = content.replace(/\s/g, '-').toLowerCase();
	}
</script>

<h2 class="text-gray-900 text-xl font-medium mt-8 mb-4" use:init>
	<a id={slug} class="group" href="#{slug}" aria-label={content}>
		<slot />
		<span
			class="text-blue-600 items-center opacity-0 transition duration-200 group-hover:opacity-100 group-focus:opacity-100"
		>
			#
		</span>
	</a>
</h2>
