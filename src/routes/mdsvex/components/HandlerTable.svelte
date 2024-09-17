<script lang="ts">
	interface Handler {
		name: string;
		type: string;
		description: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		handlers: Handler[];
	};

	export let handlers: Handler[] = [];
</script>

<table
	{...$$restProps}
	class="w-full rounded-lg shadow-lg text-sm overflow-hidden dark:text-neutral-200 dark:bg-neutral-600"
>
	<thead class="bg-gray-100 dark:bg-neutral-700">
		<tr>
			<th class="py-2 px-4 font-semibold w-[20%] rounded-bl-lg"
				><span class="flex item-start">Name</span></th
			>
			<th class="py-2 px-4 font-semibold w-auto rounded-br-lg"
				><span class="flex item-start">Type</span></th
			>
			<th class="py-2 px-4 font-semibold w-auto rounded-br-lg"
				><span class="flex item-start">Description</span></th
			>
		</tr>
	</thead>
	<tbody>
		{#each handlers as handler (handler.name)}
			<tr>
				<td class="p-4"><code class="font-medium">{handler.name}</code></td>
				<td class="p-4"
					><span class="font-base text-gray-500 dark:text-neutral-100">{handler.type}</span></td
				>
				<td class="p-4"
					><span class="font-base text-gray-500 dark:text-neutral-100">{handler.description}</span
					></td
				>
			</tr>
		{/each}
	</tbody>
</table>
