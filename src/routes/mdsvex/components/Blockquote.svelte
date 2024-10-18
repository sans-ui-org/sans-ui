<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		content: string;
	};

	export let content: $$Props['content'] = '';
</script>

<blockquote
	class="border px-4 my-6 py-3 rounded-xl border-blue-400 bg-blue-50/20 dark:text-neutral-100"
	{...$$restProps}
>
	<p>
		{content}
	</p>
</blockquote>
