<script lang="ts">
	interface Slot {
		name: string;
		description: string;
	}

	type $$Props = {
		slots: Slot[];
	};

	export let slots: Slot[] = [];
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
				><span class="flex item-start">Description</span></th
			>
		</tr>
	</thead>
	<tbody>
		{#each slots as slot (slot.name)}
			<tr>
				<td class="p-4"><code class="font-medium">{slot.name}</code></td>
				<td class="p-4"
					><span class="font-base text-gray-500 dark:text-neutral-100">{slot.description}</span></td
				>
			</tr>
		{/each}
	</tbody>
</table>
