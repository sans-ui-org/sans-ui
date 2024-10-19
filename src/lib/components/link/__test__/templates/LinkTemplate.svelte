<script lang="ts">
	import Link from '../../Link.svelte';

	export let disabled = false;
</script>

<Link href="https://www.google.com" {disabled}>Google</Link>
