<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import docsearch from '@docsearch/js';
	import '@docsearch/css';

	onMount(() => {
		if (browser) {
			docsearch({
				container: '#docsearch',
				placeholder: 'Search documentations',
				appId: 'XEHOZK48U4',
				indexName: 'sans-ui-docsearch',
				apiKey: import.meta.env.VITE_DOCSEARCH_API_KEY
				// INFO: You can use this test index in you local development. (ref: https://docsearch.algolia.com/docs/DocSearch-v3#testing)
				// appId: 'R2IYF7ETH7',
				// apiKey: '599cec31baffa4868cae4e79f180729b',
				// indexName: 'docsearch'
			});
		}
	});
</script>

<div id="docsearch" {...$$restProps} />
