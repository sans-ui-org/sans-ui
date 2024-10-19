---
layout: componentLayout
title: Checkbox
description: Checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
category: component
githubFolder: /checkbox/Checkbox.svelte
storybookFolder: checkbox
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'default-checked', title: 'Default Checked', level: 1 },
			{ slug: 'indeterminate', title: 'Indeterminate', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'checkbox-props', title: 'Checkbox Props', level: 1 },
			{ slug: 'checkbox-handlers', title: 'Checkbox Handlers', level: 1 },
			{ slug: 'checkbox-slots', title: 'Checkbox Slots', level: 1 },
		]
prevButton: { title: 'Button', slug: '/components/button' }
nextButton: { title: 'Input', slug: '/components/input' }
---

<script>
	import { Checkbox } from '$lib';
	import { PropertyTable, HandlerTable, SlotTable, CodeBlockWrapper, AccessibilityListItem}from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { checkboxSlots, checkboxHandlers, checkboxProps } from "./checkbox-props.ts"

</script>

## Set Up

To use the Checkbox component, import it in the script tag:

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>
```

</CodeBlockWrapper>

## Usage

The Checkbox component allows users to select one or more options in the form of a square box. It is available in multiple styles, sizes, colors, and variants.

<Checkbox />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>

<Checkbox />
```

</CodeBlockWrapper>

## Variant

The `variant` prop lets you customize the color theme of the Checkbox:

<div class="flex flex-row gap-2">
	<Checkbox checked variant="primary" />
	<Checkbox checked variant="secondary" />
	<Checkbox checked variant="success" />
	<Checkbox checked variant="warning" />
	<Checkbox checked variant="danger" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>

<Checkbox checked variant="primary" />
<Checkbox checked variant="secondary" />
<Checkbox checked variant="success" />
<Checkbox checked variant="warning" />
<Checkbox checked variant="danger" />
```

</CodeBlockWrapper>

## Size

Use the `size` prop to adjust the size of the Checkbox:

<div class="flex flex-row gap-2">
	<Checkbox size="sm" />
	<Checkbox size="md" />
	<Checkbox size="lg" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>

<div class="flex flex-row gap-2">
	<Checkbox size="sm" />
	<Checkbox size="md" />
	<Checkbox size="lg" />
</div>
```

</CodeBlockWrapper>

## Disabled

The `disabled` prop disables the Checkbox:

<Checkbox checked disabled />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>

<Checkbox checked disabled />
```

</CodeBlockWrapper>

## Default Checked

Set the initial check state using the `checked` prop:

<Checkbox checked />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>

<Checkbox checked />
```

</CodeBlockWrapper>

## Indeterminate

Use the `indeterminate` prop to set the Checkbox to an indeterminate state:

<Checkbox indeterminate />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>

<Checkbox indeterminate />
```

</CodeBlockWrapper>

## Animation

Control the Checkbox animation using the `animation` prop:

<Checkbox animation={false} />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui/core';
</script>

<Checkbox animation={false} />
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-3 ml-10 mt-4">
	<AccessibilityListItem>Built with native HTML input elements.</AccessibilityListItem>
	<AccessibilityListItem>Full support for browser features like form autofill.</AccessibilityListItem>
	<AccessibilityListItem>Keyboard event support for "Tab" and "Space" keys.</AccessibilityListItem>
	<AccessibilityListItem>Labeling support for assistive technology.</AccessibilityListItem>
	<AccessibilityListItem>Indeterminate state support.</AccessibilityListItem>
</ul>

## API

Checkbox provides APIs(Properties) that is necessary for you to configure a Checkbox compponent.

### Checkbox Props

<PropertyTable properties={checkboxProps} />

### Checkbox Handlers

<HandlerTable handlers={checkboxHandlers} />

### Checkbox Slots

<SlotTable slots={checkboxSlots} />
