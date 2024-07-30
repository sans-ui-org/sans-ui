---
layout: componentLayout
title: Ripple
description: By creating a ripple-like animation that emanates from a user's interaction
category: action
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
		]
---

<script>
	import { createRipple } from '$lib';
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"

  const ripple = createRipple();
</script>

## Set Up

Import `createRipple` action in the script tag.

```svelte
<script>
	import { createRipple } from '$lib';
</script>
```

## Usage

For example, we can play `createRipple` transition effect, make sure that `position` is `relative` for the pareent component of your component gets passed `createRipple`'s return function.

<button class="bg-gray-300 p-4 rounded-full relative" use:ripple>You button with Ripple Effect</button>

```svelte
<script>
	import { createRipple } from '$lib';

	const ripple = createRipple();
</script>

<button class="bg-gray-300 p-4 rounded-full relative" use:ripple>
	You button with Ripple Effect
</button>
```
