---
layout: componentLayout
title: Spinner
description: Spinner express an unspecified wait time or display the length of a process.
category: component
githubFolder: /spinner/Spinner.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'kind', title: 'Kind', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'spinner-props', title: 'Spinner Props', level: 1 },
			{ slug: 'spinner-slots', title: 'Spinner Slots', level: 1 },
		]
---

<script>
	import { Spinner } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { spinnerProps, spinnerSlots } from "./spinner-props.ts"

</script>

## Set Up

Import a Spinner component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Spinner } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

<Spinner />

<CodeBlockWrapper>

```svelte
<script>
	import { Spinner } from '@sans-ui';
</script>

<Spinner>Spinner</Spinner>
```

</CodeBlockWrapper>

## Variant

Spinners has `variant` prop to decide the color theme of it.

<div class="flex flex-row gap-16 flex-wrap">
	<Spinner variant="primary" />
	<Spinner variant="secondary" />
	<Spinner variant="success" />
	<Spinner variant="warning" />
	<Spinner variant="danger" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Spinner } from '@sans-ui';
</script>

<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="success" />
<Spinner variant="warning" />
<Spinner variant="danger" />
```

</CodeBlockWrapper>

## Kind

Spinners has `kind` prop to defines the kind of spinner.

<div class="flex flex-row gap-16 flex-wrap">
	<Spinner kind="loader1" />
	<Spinner kind="loader2" />
	<Spinner kind="loader3" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Spinner } from '@sans-ui';
</script>

<Spinner kind="loader1" />
<Spinner kind="loader2" />
<Spinner kind="loader3" />
```

</CodeBlockWrapper>

## Size

Spinners has `size` prop to defines the size of spinner.

<div class="flex flex-row items-center gap-16 flex-wrap">
	<Spinner size="sm" />
	<Spinner size="md" />
	<Spinner size="lg" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Spinner } from '@sans-ui';
</script>

<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

</CodeBlockWrapper>

## Accessibility

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support `alert` role via ARIA.</div>

## API

Spinner provides APIs(Properties) that is necessary for you to configure a Spinner compponent.

### Spinner Props

<PropertyTable properties={spinnerProps} />

### Spinner Slots

<SlotTable slots={spinnerSlots} />
