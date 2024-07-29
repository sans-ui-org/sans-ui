---
layout: componentLayout
title: Focus
description: Manipulating the focus order and intercepting certain keyboard events within a component such as Modal.
category: action
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
		]
---

<script>
	import { Button, focusTrap, autoFocus } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"

	let open = false
	const openDialog = () => {
		open = true;
	}
</script>

## Set Up

We offer `focusTrap` and `autoFocus` action in the script tag.

```svelte
<script>
	import { focusTrap, autoFocus } from '$lib';
</script>
```

## Usage

`focusTrap` allows you to implement focus-trap feature easily. `autoFocus` makes user's focus onto the first interactive elment in the component that you applied `autoFocus`. Let's take a look at an example with `dialog` element...

<Button on:click={openDialog}>Show dialog element</Button>

<dialog {open} use:focusTrap use:autoFocus class="bg-gray-200 px-24 py-12">
  <p class="mb-6">Greetings, one and all!</p>
  <form method="dialog">
    <Button>Cancel</Button>
    <Button>OK</Button>
  </form>
</dialog>

```svelte
<script>
	import { Button, focusTrap } from '$lib';

	let open = false;
	const openDialog = () => {
		open = true;
	};
</script>

<dialog {open} use:focusTrap use:autoFocus class="bg-gray-200 px-24 py-12">
	<p class="mb-6">Greetings, one and all!</p>
	<form method="dialog">
		<Button>Cancel</Button>
		<Button>OK</Button>
	</form>
</dialog>
```
