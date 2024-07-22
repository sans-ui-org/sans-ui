<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<li transition:slide|global>
	<slot />
</li>
