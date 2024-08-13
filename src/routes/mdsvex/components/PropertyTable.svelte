<script lang="ts">
	interface Property {
		name: string;
		type: string;
		default: string;
	}

	type $$Props = {
		properties: Property[];
	};

	export let properties: Property[] = [];
</script>

<table
	{...$$restProps}
	class="w-full border-collapse border border-gray-200 text-sm dark:text-neutral-200"
>
	<thead class="bg-gray-100 dark:bg-gray-700">
		<tr>
			<th class="border border-gray-200 py-2 px-4 font-semibold w-[30%]"
				><span class="flex item-start">Name</span></th
			>
			<th class="border border-gray-200 py-2 px-4 font-semibold w-[40%]"
				><span class="flex item-start">Type</span></th
			>
			<th class="border border-gray-200 py-2 px-4 font-semibold w-[30%]"
				><span class="flex item-start">Default Value</span></th
			>
		</tr>
	</thead>
	<tbody>
		{#each properties as property (property.name)}
			<tr>
				<td class="border border-gray-200 p-4"><code class="font-medium">{property.name}</code></td>
				<td class="border border-gray-200 p-4"
					><span class="font-base text-gray-500 dark:text-neutral-100">{property.type}</span></td
				>
				<td class="border border-gray-200 p-4"
					><span class="font-base text-gray-500 dark:text-neutral-100">{property.default}</span></td
				>
			</tr>
		{/each}
	</tbody>
</table>
