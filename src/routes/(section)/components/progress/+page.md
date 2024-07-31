---
layout: componentLayout
title: Progress
description: Circular progress indicators are utilized to indicate an undetermined wait period or visually represent the duration of a process.
category: component
githubFolder: /progress/Progress.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'track-width', title: 'Track Width', level: 0 },
			{ slug: 'custom-inner-label', title: 'Custom Inner Label', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'progress-props', title: 'Progress Props', level: 1 },
		]
---

<script>
	import { Progress } from '$lib';
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import progressProps from "./progress-props.ts"

</script>

## Set Up

Import a Progress component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

The Progress component allows you to express how much percentage/number by using the circular gage.

<Progress value={70} />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress value={70} />
```

</CodeBlockWrapper>

## Variant

Progress has `variant` prop to decide the color theme of it.

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
	import { Progress } from '$lib';
</script>

<Progress variant="primary" />
<Progress variant="secondary" />
<Progress variant="success" />
<Progress variant="warning" />
<Progress variant="danger" />
```

</CodeBlockWrapper>

## Size

Progress has `size` prop to decide the size theme of it. (Unlike any other components, Progress allows you to decide the size of itself by the number of the `px`)

<Progress size={100} />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress size={100} />
```

</CodeBlockWrapper>

## Track Width

Progress has `trackWidth` prop to decide the tracker circle's width. (Progress allows you to decide the width of the tracker by the number of the `px`)

<Progress trackWidth={10} />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress size={10} />
```

</CodeBlockWrapper>

## Custom Inner Label

Progress has `customInnerLabel` prop to decide the label inside of the spinner.

<Progress value={40} customInnerLabel="40 Mbps" />

<CodeBlockWrapper>

```svelte
<script>
	import { Progress } from '$lib';
</script>

<Progress value={40} customInnerLabel="40 Mbps" />
```

</CodeBlockWrapper>

## API

Progress provides APIs(Properties) that is necessary for you to configure a Progress compponent.

### Progress Props

<PropertyTable properties={progressProps} />
