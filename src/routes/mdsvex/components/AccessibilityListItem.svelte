<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import AccessibilityIcon from '../../icons/AccessibilityIcon.svelte';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLBaseAttributes;
</script>

<li {...$$restProps} class={cn($$restProps.class, 'relative flex-row items-center')}>
	<AccessibilityIcon class="absolute top-[2.5px] left-[-28px] w-5 h-5" />
	<slot />
</li>
