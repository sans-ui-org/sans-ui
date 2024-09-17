---
layout: componentLayout
title: Checkbox
description: Checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
category: component
githubFolder: /checkbox/Checkbox.svelte
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
---

<script>
	import { Checkbox } from '$lib';
	import { PropertyTable, HandlerTable, SlotTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { checkboxSlots, checkboxHandlers, checkboxProps } from "./checkbox-props.ts"

</script>

## Set Up

Import a Checkbox component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants

<Checkbox />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui';
</script>

<Checkbox />
```

</CodeBlockWrapper>

## Variant

Checkbox has `variant` prop to decide the color theme of it.

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
	import { Checkbox } from '@sans-ui';
</script>

<Checkbox checked variant="primary" />
<Checkbox checked variant="secondary" />
<Checkbox checked variant="success" />
<Checkbox checked variant="warning" />
<Checkbox checked variant="danger" />
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
	import { Checkbox } from '@sans-ui';
</script>

<div class="flex flex-row gap-2">
	<Checkbox size="sm" />
	<Checkbox size="md" />
	<Checkbox size="lg" />
</div>
```

</CodeBlockWrapper>

## Disabled

Checkbox has `disabled` prop to disable your Checkbox component

<Checkbox checked disabled />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui';
</script>

<Checkbox checked disabled />
```

</CodeBlockWrapper>

## Default Checked

Checkbox has `checked` prop to have Checkbox component's default check state to be checked.

<Checkbox checked />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui';
</script>

<Checkbox checked />
```

</CodeBlockWrapper>

## Indeterminate

Checkbox has `indeterminate` prop to get Checkbox component's check state to be `indeterminate`.

<Checkbox indeterminate />

<CodeBlockWrapper>

```svelte
<script>
	import { Checkbox } from '@sans-ui';
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
	import { Checkbox } from '@sans-ui';
</script>

<Checkbox animation={false} />
```

</CodeBlockWrapper>

## Accessibility

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Built with a native HTML input element.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Full support for browser features like form autofill.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Keyboard focus management and cross browser normalization. </div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Keyboard event support for `Tab` and `Space` keys.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Labeling support for assistive technology.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Indeterminate state support.</div>

## API

Checkbox provides APIs(Properties) that is necessary for you to configure a Checkbox compponent.

### Checkbox Props

<PropertyTable properties={checkboxProps} />

### Checkbox Handlers

<HandlerTable handlers={checkboxHandlers} />

### Checkbox Slots

<SlotTable slots={checkboxSlots} />
