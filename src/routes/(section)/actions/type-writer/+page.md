---
layout: componentLayout
title: Type Writter
description: An animation technique that makes a string of text appear on screen letter by letter, as if it's being typed out in real time by a typewriter
category: action
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
		]
prevButton: { title: 'Focus Trap', slug: '/actions/focus' }
nextButton: { title: 'Ripple', slug: '/actions/ripple' }
---

<script>
	import { onMount } from 'svelte';
	import { typewriter } from '$lib';
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"

	let showTitle = false;
	onMount(() => {
		showTitle = true;

		return () => {
			showTitle = false;
		};
	});
</script>

## Set Up

Import `typewriter` action in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { typewriter } from '@sans-ui/svelte';
</script>
```

</CodeBlockWrapper>

## Usage

For example, we can play `typewriter` transition effect when the message appears in the DOM.

{#if showTitle}
<span class="text-md font-light text-center dark:text-neutral-100" transition:typewriter={{ speed: 1.5 }}>
Contributions are more than welcome! ^\_^
</span>
{/if}

<CodeBlockWrapper>

```svelte
<script>
	import { onMount } from 'svelte';
	import { typewriter } from '@sans-ui/svelte';

	let showTitle = false;
	onMount(() => {
		showTitle = true;

		return () => {
			showTitle = false;
		};
	});
</script>

{#if showTitle}
	<span
		class="text-xl font-light text-center dark:text-neutral-100"
		transition:typewriter={{ speed: 1.5 }}
	>
		Contributions are more than welcome! ^\_^
	</span>
{/if}
```

</CodeBlockWrapper>
