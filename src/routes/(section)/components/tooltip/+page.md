---
layout: componentLayout
title: Tooltip
description: Tooltips provide brief, informative messages that appear when a user interacts with an element.
category: component
githubFolder: /tooltip/Tooltip.svelte
storybookFolder: tooltip
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'position', title: 'Position', level: 1 },
			{ slug: 'trackable', title: 'Trackable', level: 1 },
			{ slug: 'delay-open-and-close', title: 'Delay Open And Close', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'tooltip-props', title: 'Tooltip Props', level: 1 },
			{ slug: 'tooltip-slots', title: 'Tooltip Slots', level: 1 },
		]
prevButton: { title: 'Textarea', slug: '/components/textarea' }
nextButton: { title: 'Focus Trap', slug: '/actions/focus' }
---

<script>
	import { Tooltip, Button } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { tooltipProps, tooltipSlots } from "./tooltip-props.ts"

</script>

## Set Up

To use the Tooltip component, import it into your script.

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

Display additional information when users hover over or focus on an element.

<Tooltip title="This is title" size="md"><Button >Here is the Trigger</Button></Tooltip>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '@sans-ui';
</script>

<Tooltip title="This is title" size="md">
	<Button>Here is the Trigger</Button>
</Tooltip>
```

</CodeBlockWrapper>

## Variant

Customize the color theme of the Tooltip with the `variant` prop.

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
	import { Tooltip, Button } from '@sans-ui';
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

Adjust the Tooltip size using the `size` prop.

<div class="flex flex-row gap-4">
	<Tooltip title="This is title" size="sm"><Button>Here is sm</Button></Tooltip>
	<Tooltip title="This is title" size="md"><Button>Here is md</Button></Tooltip>
	<Tooltip title="This is title" size="lg"><Button>Here is lg</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '@sans-ui';
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

Control the Tooltip's position with the `position` prop.

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" position="top"><Button>top</Button></Tooltip>
	<Tooltip title="This is title" position="left"><Button>left</Button></Tooltip>
	<Tooltip title="This is title" position="right"><Button>right</Button></Tooltip>
	<Tooltip title="This is title" position="bottom"><Button>bottom</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '@sans-ui';
</script>

<Tooltip title="This is title" position="top"><Button>top</Button></Tooltip>
<Tooltip title="This is title" position="left"><Button>left</Button></Tooltip>
<Tooltip title="This is title" position="right"><Button>right</Button></Tooltip>
<Tooltip title="This is title" position="bottom"><Button>bottom</Button></Tooltip>
```

</CodeBlockWrapper>

## Trackable

Make the Tooltip trackable with the `trackable` prop, so it follows the cursor.k

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" trackable><Button>trackable</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '@sans-ui';
</script>

<Tooltip title="This is title" trackable><Button>trackable</Button></Tooltip>
```

</CodeBlockWrapper>

## Delay Open And Close

Set delays for opening and closing the Tooltip with `delayToOpen` and `delayToHide` props.

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" delayToOpen={300}><Button>Delay Open</Button></Tooltip>
	<Tooltip title="This is title" delayToHide={300}><Button>Delay Close</Button></Tooltip>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Tooltip, Button } from '@sans-ui';
</script>

<Tooltip title="This is title" delayToOpen={300}><Button>Delay Open</Button></Tooltip>
<Tooltip title="This is title" delayToHide={300}><Button>Delay Close</Button></Tooltip>
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-3 ml-10 mt-4">
	<AccessibilityListItem>Hover management and cross browser normalization.</AccessibilityListItem>
	<AccessibilityListItem>Labeling support for screen readers ("aria-describedby").</AccessibilityListItem>
	<AccessibilityListItem>Matches native tooltip behavior with delay on hover of first tooltip and no delay on subsequent tooltips.</AccessibilityListItem>
</ul>

## API

Tooltip provides APIs(Properties) that is necessary for you to configure a Tooltip compponent.

### Tooltip Props

<PropertyTable properties={tooltipProps} />

### Tooltip Slots

Tooltip component consists of these elements and you have control over those elements. For example, you can override its Tailwind CSS by modifying some class names through `classes` props.

<SlotTable slots={tooltipSlots} />
