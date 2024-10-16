<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onClick = () => {
		dispatch('click');
	};
</script>

<button {...$$restProps} on:click={onClick}>
	<svg focusable="false" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">
		<path
			d="M17.4141 16L24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z"
			color="currentColor"
			stroke="currentColor"
		></path>
	</svg>
</button>
