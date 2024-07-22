---
layout: componentLayout
title: Progress
description: Circular progress indicators are utilized to indicate an undetermined wait period or visually represent the duration of a process.
category: Components
---

<script>
	import { Progress } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import progressProps from "./progress-props.ts"

</script>

## Set Up

Import a Progress component in the script tag.

```svelte
<script>
	import { Progress } from '$lib';
</script>
```

## Usage

The Progress component allows you to express how much percentage/number by using the circular gage.

<Progress value={70} />

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress value={70} />
```

## Variant

Progress has `variant` prop to decide the color theme of it.

<Progress variant="success" />

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress variant="success" />
```

## Size

Progress has `size` prop to decide the size theme of it. (Unlike any other components, Progress allows you to decide the size of itself by the number of the `px`)

<Progress size={100} />

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress size={100} />
```

## Track Width

Progress has `trackWidth` prop to decide the tracker circle's width. (Progress allows you to decide the width of the tracker by the number of the `px`)

<Progress trackWidth={10} />

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress size={10} />
```

## Custom Inner Label

Progress has `customInnerLabel` prop to decide the label inside of the spinner.

<Progress value={40} customInnerLabel="40 Mbps" />

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress value={40} customInnerLabel="40 Mbps" />
```

## API

Progress provides APIs(Properties) that is necessary for you to configure a Progress compponent.

### Progress Props

<PropertyTable properties={progressProps} />
