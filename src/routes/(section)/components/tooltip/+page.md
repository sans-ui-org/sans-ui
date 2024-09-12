---
layout: componentLayout
title: Tooltip
description: Tooltips display a brief informative message that appears when a user interacts with an element.
category: component
githubFolder: /tooltip/Tooltip.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'position', title: 'Position', level: 0 },
			{ slug: 'trackable', title: 'Trackable', level: 0 },
			{ slug: 'delay-open-and-close', title: 'Delay Open And Close', level: 0 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'tooltip-props', title: 'Tooltip Props', level: 1 },
			{ slug: 'tooltip-slots', title: 'Tooltip Slots', level: 1 },
		]
---

<script>
	import { Tooltip, Button } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { tooltipProps, tooltipSlots } from "./tooltip-props.ts"

</script>

## Set Up

Import a Tooltip component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

Use the Tooltip component to show extra description when hovering or focusing on an element.

<Tooltip title="This is title" size="md"><Button >Here is the Trigger</Button></Tooltip>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>

<Tooltip title="This is title" size="md">
	<Button>Here is the Trigger</Button>
</Tooltip>
```

</CodeBlockWrapper>

## Variant

Tooltip has `variant` prop to decide the color theme of it.

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" variant="primary"><Button variant="primary" >Here is primary</Button></Tooltip>
	<Tooltip title="This is title" variant="secondary"><Button  variant="secondary">Here is secondary</Button></Tooltip>
	<Tooltip title="This is title" variant="success"><Button variant="success">Here is success</Button></Tooltip>
	<Tooltip title="This is title" variant="warning"><Button variant="warning">Here is warning</Button></Tooltip>
	<Tooltip title="This is title" variant="danger"><Button variant="danger">Here is danger</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>

<Tooltip title="This is title" variant="primary">
	<Button variant="primary">Here is primary</Button>
</Tooltip>
<Tooltip title="This is title" variant="secondary">
	<Button variant="secondary">Here is secondary</Button>
</Tooltip>
<Tooltip title="This is title" variant="success">
	<Button variant="success">Here is success</Button>
</Tooltip>
<Tooltip title="This is title" variant="warning">
	<Button variant="warning">Here is warning</Button>
</Tooltip>
<Tooltip title="This is title" variant="danger">
	<Button variant="danger">Here is danger</Button>
</Tooltip>
```

</CodeBlockWrapper>

## Size

Tooltip has `size` prop to decide the size of it.

<div class="flex flex-row gap-4">
	<Tooltip title="This is title" size="sm"><Button>Here is sm</Button></Tooltip>
	<Tooltip title="This is title" size="md"><Button>Here is md</Button></Tooltip>
	<Tooltip title="This is title" size="lg"><Button>Here is lg</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>

<Tooltip title="This is title" variant="primary">
	<Button variant="primary">Here is primary</Button>
</Tooltip>
<Tooltip title="This is title" variant="secondary">
	<Button variant="secondary">Here is secondary</Button>
</Tooltip>
<Tooltip title="This is title" variant="success">
	<Button variant="success">Here is success</Button>
</Tooltip>
<Tooltip title="This is title" variant="warning">
	<Button variant="warning">Here is warning</Button>
</Tooltip>
<Tooltip title="This is title" variant="danger">
	<Button variant="danger">Here is danger</Button>
</Tooltip>
```

</CodeBlockWrapper>

## Position

Tooltip has `position` prop to decide the position of it.

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" position="top"><Button>top</Button></Tooltip>
	<Tooltip title="This is title" position="left"><Button>left</Button></Tooltip>
	<Tooltip title="This is title" position="right"><Button>right</Button></Tooltip>
	<Tooltip title="This is title" position="bottom"><Button>bottom</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>

<Tooltip title="This is title" position="top"><Button>top</Button></Tooltip>
<Tooltip title="This is title" position="left"><Button>left</Button></Tooltip>
<Tooltip title="This is title" position="right"><Button>right</Button></Tooltip>
<Tooltip title="This is title" position="bottom"><Button>bottom</Button></Tooltip>
```

</CodeBlockWrapper>

## Trackable

Tooltip has `trackable` prop to define if the tooltip is trackable.

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" trackable><Button>trackable</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>

<Tooltip title="This is title" trackable><Button>trackable</Button></Tooltip>
```

</CodeBlockWrapper>

## Delay Open And Close

Tooltip has `delayToOpen` and `delayToHide` props the delay to open/hide the tooltip.

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" delayToOpen={300}><Button>Delay Open</Button></Tooltip>
	<Tooltip title="This is title" delayToHide={300}><Button>Delay Close</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>

<Tooltip title="This is title" delayToOpen={300}><Button>Delay Open</Button></Tooltip>
<Tooltip title="This is title" delayToHide={300}><Button>Delay Close</Button></Tooltip>
```

</CodeBlockWrapper>

## Accessibility

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Hover management and cross browser normalization.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Labeling support for screen readers (`aria-describedby`).</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Matches native tooltip behavior with delay on hover of first tooltip and no delay on subsequent tooltips.</div>

## API

Tooltip provides APIs(Properties) that is necessary for you to configure a Tooltip compponent.

### Tooltip Props

<PropertyTable properties={tooltipProps} />

### Tooltip Slots

Tooltip component consists of these elements and you have control over those elements. For example, you can override its Tailwind CSS by modifying some class names through `classes` props.

<SlotTable slots={tooltipSlots} />
