---
layout: componentLayout
title: Checkbox
description: Checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
category: Components
---

<script>
	import { Checkbox } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import checkboxProps from "./checkbox-props.ts"

</script>

## Set Up

Import a Checkbox component in the script tag.

```svelte
<script>
	import { Checkbox } from '$lib';
</script>
```

## Usage

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants

<Checkbox />

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox />
```

## Variant

Checkbox has `variant` prop to decide the color theme of it.

<div class="flex flex-row gap-2">
	<Checkbox defaultChecked variant="primary" />
	<Checkbox defaultChecked variant="secondary" />
	<Checkbox defaultChecked variant="success" />
	<Checkbox defaultChecked variant="warning" />
	<Checkbox defaultChecked variant="danger" />
</div>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox defaultChecked variant="primary" />
<Checkbox defaultChecked variant="secondary" />
<Checkbox defaultChecked variant="success" />
<Checkbox defaultChecked variant="warning" />
<Checkbox defaultChecked variant="danger" />
```

## Size

Checkbox has `size` prop to decide the size of it.

<div class="flex flex-row gap-2">
	<Checkbox size="sm" />
	<Checkbox size="md" />
	<Checkbox size="lg" />
</div>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<div class="flex flex-row gap-2">
	<Checkbox size="sm" />
	<Checkbox size="md" />
	<Checkbox size="lg" />
</div>
```

## Disable

Checkbox has `disabled` prop to disable your Checkbox component

<Checkbox disabled />

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox disabled />
```

## Default Checked

Checkbox has `defaultChecked` prop to have Checkbox component's default check state to be checked.

<Checkbox defaultChecked />

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox defaultChecked />
```

## Indeterminate

Checkbox has `indeterminate` prop to get Checkbox component's check state to be `indeterminate`.

<Checkbox indeterminate />

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox indeterminate />
```

## Animation

Checkbox has `animation` prop to control Checkbox component's animation.

<Checkbox animation={false} />

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox animation={false} />
```

## API

Checkbox provides APIs(Properties) that is necessary for you to configure a Checkbox compponent.

### Checkbox Props

<PropertyTable properties={checkboxProps} />
