<script lang="ts">
	import type { FontSize, FontWeight, UnderlineType } from '$lib/link/Link.svelte';
	import Link from '$lib/link/Link.svelte';
	import type { ComponentVariant } from '$lib/utils/utils';

	export let variant: ComponentVariant = 'primary';
	export let size: FontSize = 'md';
	export let bold: FontWeight = 'normal';
	export let url: string = 'https://www.google.com';
	export let underlineType: UnderlineType = 'always';
	export let disabled = false;
</script>

<Link href={url} target="_blank" {variant} {size} {bold} {disabled} {underlineType}>Google</Link>
