---
layout: componentLayout
title: Progress
description: The Progress component displays a circular progress indicator, useful for showing the status of a task or operation. It is commonly used to represent an undetermined wait time or to visualize the progress of a process.
category: component
githubFolder: /progress/Progress.svelte
storybookFolder: progress
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'track-width', title: 'Track Width', level: 1 },
			{ slug: 'custom-inner-label', title: 'Custom Inner Label', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'progress-props', title: 'Progress Props', level: 1 },
			{ slug: 'progress-slots', title: 'Progress Slots', level: 1 },
		]
prevButton: { title: 'Modal', slug: '/components/modal' }
nextButton: { title: 'Select', slug: '/components/select' }
---

<script>
	import { Progress } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { progressProps, progressSlots } from "./progress-props.ts"

</script>

## Set Up

To use the Progress component, import it into your Svelte file:

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '@sans-ui/core';
</script>
```

</CodeBlockWrapper>

## Usage

The Progress component visualizes progress using a circular gauge. You can set the value prop to indicate the current progress percentage.

<Progress value={70} />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '@sans-ui/core';
</script>

<Progress value={70} />
```

</CodeBlockWrapper>

## Variant

Use the `variant` prop to change the color theme of the Progress component. The available variants include primary, secondary, success, warning, and danger.

<div class="flex flex-row gap-2">
	<Progress variant="primary" />
	<Progress variant="secondary" />
	<Progress variant="success" />
	<Progress variant="warning" />
	<Progress variant="danger" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '@sans-ui/core';
</script>

<Progress variant="primary" />
<Progress variant="secondary" />
<Progress variant="success" />
<Progress variant="warning" />
<Progress variant="danger" />
```

</CodeBlockWrapper>

## Size

Adjust the size of the Progress component using the `size` prop, specified in pixels.

<Progress size={100} />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '@sans-ui/core';
</script>

<Progress size={100} />
```

</CodeBlockWrapper>

## Track Width

Customize the width of the progress track with the `trackWidth` prop, specified in pixels.

<Progress trackWidth={10} />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '@sans-ui/core';
</script>

<Progress size={10} />
```

</CodeBlockWrapper>

## Custom Inner Label

The `customInnerLabel` prop allows you to display a custom label inside the progress circle.

<Progress value={40} customInnerLabel="40 Mbps" />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '@sans-ui/core';
</script>

<Progress value={40} customInnerLabel="40 Mbps" />
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-3 ml-10 mt-4">
	<AccessibilityListItem>Exposed to assistive technology as a progress bar via ARIA.</AccessibilityListItem>
	<AccessibilityListItem>Internationalized number formatting as a percentage or value.</AccessibilityListItem>
	<AccessibilityListItem>Exposes the "aria-valuenow", "aria-valuemin", "aria-valuemax" and `aria-valuetext` `attributes`</AccessibilityListItem>
</ul>

## API

Progress provides APIs(Properties) that is necessary for you to configure a Progress compponent.

### Progress Props

<PropertyTable properties={progressProps} />

### Progress Slots

<SlotTable slots={progressSlots} />
