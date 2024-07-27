<script lang="ts">
	import '../app.css';
	import '../static/global.css';
	import Header from './global-components/Header.svelte';
</script>

<main>
	<!-- Header -->
	<Header />
	<!-- Content -->
	<slot />
</main>
