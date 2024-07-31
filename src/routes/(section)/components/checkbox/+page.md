---
layout: componentLayout
title: Checkbox
description: Checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
category: component
githubFolder: /checkbox/Checkbox.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'disabled', title: 'Disabled', level: 0 },
			{ slug: 'default-checked', title: 'Default Checked', level: 0 },
			{ slug: 'indeterminate', title: 'Indeterminate', level: 0 },
			{ slug: 'animation', title: 'Animation', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'checkbox-props', title: 'Checkbox Props', level: 1 },
		]
---

<script>
	import { Checkbox } from '$lib';
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import checkboxProps from "./checkbox-props.ts"

</script>

## Set Up

Import a Checkbox component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants

<Checkbox />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox />
```

</CodeBlockWrapper>

## Variant

Checkbox has `variant` prop to decide the color theme of it.

<div class="flex flex-row gap-2">
	<Checkbox defaultChecked variant="primary" />
	<Checkbox defaultChecked variant="secondary" />
	<Checkbox defaultChecked variant="success" />
	<Checkbox defaultChecked variant="warning" />
	<Checkbox defaultChecked variant="danger" />
</div>

<CodeBlockWrapper>

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

</CodeBlockWrapper>

## Size

Checkbox has `size` prop to decide the size of it.

<div class="flex flex-row gap-2">
	<Checkbox size="sm" />
	<Checkbox size="md" />
	<Checkbox size="lg" />
</div>

<CodeBlockWrapper>

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

</CodeBlockWrapper>

## Disable

Checkbox has `disabled` prop to disable your Checkbox component

<Checkbox disabled />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox disabled />
```

</CodeBlockWrapper>

## Default Checked

Checkbox has `defaultChecked` prop to have Checkbox component's default check state to be checked.

<Checkbox defaultChecked />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox defaultChecked />
```

</CodeBlockWrapper>

## Indeterminate

Checkbox has `indeterminate` prop to get Checkbox component's check state to be `indeterminate`.

<Checkbox indeterminate />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox indeterminate />
```

</CodeBlockWrapper>

## Animation

Checkbox has `animation` prop to control Checkbox component's animation.

<Checkbox animation={false} />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '$lib';
</script>

<Checkbox animation={false} />
```

</CodeBlockWrapper>

## API

Checkbox provides APIs(Properties) that is necessary for you to configure a Checkbox compponent.

### Checkbox Props

<PropertyTable properties={checkboxProps} />
