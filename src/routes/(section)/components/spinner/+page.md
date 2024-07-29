---
layout: componentLayout
title: Spinner
description: Spinner express an unspecified wait time or display the length of a process.
category: component
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'kind', title: 'Kind', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'spinner-props', title: 'Spinner Props', level: 1 },
		]
---

<script>
	import { Spinner } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import spinnerProps from "./spinner-props.ts"

</script>

## Set Up

Import a Spinner component in the script tag.

```svelte
<script>
	import { Spinner } from '$lib';
</script>
```

## Usage

<Spinner />

```svelte
<script>
	import { Spinner } from '$lib';
</script>

<Spinner>Spinner</Spinner>
```

## Variant

Spinners has `variant` prop to decide the color theme of it.

<div class="flex flex-row gap-16">
	<Spinner variant="primary" />
	<Spinner variant="secondary" />
	<Spinner variant="success" />
	<Spinner variant="warning" />
	<Spinner variant="danger" />
</div>

```svelte
<script>
	import { Spinner } from '$lib';
</script>

<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="success" />
<Spinner variant="warning" />
<Spinner variant="danger" />
```

## Kind

Spinners has `kind` prop to defines the kind of spinner.

<div class="flex flex-row gap-16">
	<Spinner kind="loader1" />
	<Spinner kind="loader2" />
	<Spinner kind="loader3" />
</div>

```svelte
<script>
	import { Spinner } from '$lib';
</script>

<Spinner kind="loader1" />
<Spinner kind="loader2" />
<Spinner kind="loader3" />
```

## Size

Spinners has `size` prop to defines the size of spinner.

<div class="flex flex-row items-center gap-16">
	<Spinner size="sm" />
	<Spinner size="md" />
	<Spinner size="lg" />
</div>

```svelte
<script>
	import { Spinner } from '$lib';
</script>

<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

## API

Spinner provides APIs(Properties) that is necessary for you to configure a Spinner compponent.

### Spinner Props

<PropertyTable properties={spinnerProps} />
