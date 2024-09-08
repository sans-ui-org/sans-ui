<script lang="ts">
	import type { HTMLBaseAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLBaseAttributes;
</script>

<svg
	viewBox="0 0 16 16"
	xmlns="http://www.w3.org/2000/svg"
	version="1.1"
	fill="none"
	stroke="#FFF"
	stroke-linecap="round"
	stroke-linejoin="round"
	stroke-width="1.5"
	{...$$restProps}
>
	<rect height="10.5" width="12.5" y="2.75" x="1.75" />
	<path d="m8.75 10.25h2.5m-6.5-4.5 2.5 2.25-2.5 2.25" />
</svg>
