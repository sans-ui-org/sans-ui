---
layout: componentLayout
title: Spinner
description: The Spinner component indicates ongoing processes, typically used to express an unspecified wait time or display the length of a process.
category: component
githubFolder: /spinner/Spinner.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'kind', title: 'Kind', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'spinner-props', title: 'Spinner Props', level: 1 },
			{ slug: 'spinner-slots', title: 'Spinner Slots', level: 1 },
		]
---

<script>
	import { Spinner } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { spinnerProps, spinnerSlots } from "./spinner-props.ts"

</script>

## Set Up

To use the Spinner component, import it into your Svelte file:

<CodeBlockWrapper>

```svelte
<script>
	import { Spinner } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

The Spinner component is used to show a loading indicator.

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

The `variant` prop changes the color theme of the spinner.

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

The `kind` prop defines the style of the spinner.

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

The `size` prop sets the size of the spinner.

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

<ul class="flex flex-col gap-2 ml-6">
	<AccessibilityListItem>Supports 'alert' role via ARIA for better accessibility.</AccessibilityListItem>
</ul>

## API

Spinner provides APIs(Properties) that is necessary for you to configure a Spinner compponent.

### Spinner Props

<PropertyTable properties={spinnerProps} />

### Spinner Slots

<SlotTable slots={spinnerSlots} />
