<script lang="ts">
	interface Property {
		name: string;
		type: string;
		default: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		properties: Property[];
	};

	export let properties: Property[] = [];
</script>

<table
	{...$$restProps}
	class="w-full rounded-lg shadow-lg text-sm overflow-hidden dark:text-neutral-200 dark:bg-neutral-600"
>
	<thead class="bg-gray-100 dark:bg-neutral-700">
		<tr>
			<th class="py-2 px-4 font-semibold w-[30%] rounded-bl-lg"
				><span class="flex item-start">Name</span></th
			>
			<th class="py-2 px-4 font-semibold w-[40%]"><span class="flex item-start">Type</span></th>
			<th class="py-2 px-4 font-semibold w-[30%] rounded-br-lg"
				><span class="flex item-start">Default Value</span></th
			>
		</tr>
	</thead>
	<tbody>
		{#each properties as property (property.name)}
			<tr>
				<td class="p-4"><code class="font-medium">{property.name}</code></td>
				<td class="p-4"
					><span class="font-base text-gray-500 dark:text-neutral-100">{property.type}</span></td
				>
				<td class="p-4"
					><span class="font-base text-gray-500 dark:text-neutral-100">{property.default}</span></td
				>
			</tr>
		{/each}
	</tbody>
</table>
