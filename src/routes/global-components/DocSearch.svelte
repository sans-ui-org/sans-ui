<script lang="ts">
	import { onMount } from 'svelte';
	import docsearch from '@docsearch/js';
	import '@docsearch/css';

	onMount(() => {
		docsearch({
			container: '#docsearch',
			placeholder: 'Search documentations',
			appId: 'XEHOZK48U4',
			indexName: 'sans-ui-docsearch',
			apiKey: import.meta.env.VITE_DOCSEARCH_API_KEY,
			maxResultsPerGroup: 100,
			transformItems: (items) => {
				const group = new Set();
				items.forEach((item) => {
					if (item.hierarchy.lvl2 && !item.hierarchy.lvl3) {
						group.add(item);
					}
				});

				return items;
			}
			// INFO: You can use this test index in you local development. (ref: https://docsearch.algolia.com/docs/DocSearch-v3#testing)
			// appId: 'R2IYF7ETH7',
			// apiKey: '599cec31baffa4868cae4e79f180729b',
			// indexName: 'docsearch'
		});
	});
</script>

<div id="docsearch" {...$$restProps} />
