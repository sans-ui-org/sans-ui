---
layout: componentLayout
title: Tooltip
description: Tooltips display a brief informative message that appears when a user interacts with an element.
category: component
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'tooltip-props', title: 'Tooltip Props', level: 1 },
		]
---

<script>
	import { Tooltip, Button } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import tooltipProps from "./tooltip-props.ts"

</script>

## Set Up

Import a Tooltip component in the script tag.

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>
```

## Usage

Use the Tooltip component to show extra description when hovering or focusing on an element.

<Tooltip title="This is title" size="md"><Button >Here is the Trigger</Button></Tooltip>

```svelte
<script>
	import { Tooltip, Button } from '$lib';
</script>

<Tooltip title="This is title" size="md">
	<Button>Here is the Trigger</Button>
</Tooltip>
```

## Variant

Tooltip has `variant` prop to decide the color theme of it.

<div class="inline-flex flex-col items-start gap-4">
	<Tooltip title="This is title" variant="primary"><Button variant="primary" >Here is primary</Button></Tooltip>
	<Tooltip title="This is title" variant="secondary"><Button  variant="secondary">Here is secondary</Button></Tooltip>
	<Tooltip title="This is title" variant="success"><Button variant="success">Here is success</Button></Tooltip>
	<Tooltip title="This is title" variant="warning"><Button variant="warning">Here is warning</Button></Tooltip>
	<Tooltip title="This is title" variant="danger"><Button variant="danger">Here is danger</Button></Tooltip>
</div>

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

## Size

Tooltip has `size` prop to decide the size of it.

<div class="flex flex-row gap-4">
	<Tooltip title="This is title" size="sm"><Button>Here is sm</Button></Tooltip>
	<Tooltip title="This is title" size="md"><Button>Here is md</Button></Tooltip>
	<Tooltip title="This is title" size="lg"><Button>Here is lg</Button></Tooltip>
</div>

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

## API

Tooltip provides APIs(Properties) that is necessary for you to configure a Tooltip compponent.

### Tooltip Props

<PropertyTable properties={tooltipProps} />
