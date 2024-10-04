<script lang="ts">
	import '../app.css';
	import { Header } from './global-components';
	import Meta from './mdsvex/components/Meta.svelte';
</script>

<Meta title={`SanS-UI`} description="" />

<main class="bg-white dark:bg-neutral-800">
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<Header />
		<!-- Content -->
		<slot />
	</div>
</main>
