---
layout: componentLayout
title: Link
description: Links allow users to click their way from page to page. This component is styled to resemble a hyperlink and semantically renders an anchor element.
category: Components
---

<script>
	import { Link } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import linkProps from "./link-props.ts"

</script>

## Set Up

Import a Link component in the script tag.

```svelte
<script>
	import { Link } from '$lib';
</script>
```

## Usage

Buttons allow users to perform actions and choose with a single tap. You can deactivate the ripple effect, so we will state that later on.

<div class="w-[350px]">
	<Link  />
</div>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link />
```

## Variant

Link has `variant` prop to decide the color theme of it.

<Link href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link href="https://github.com/s-ui-org/s-ui" target="_blank"
	>This is link to the our Github page</Link
>
```

## Font Size

Link has `size` prop to decide the font size of Link component.

<div class="flex flex-col gap-2">
	<Link size="sm" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link size="md" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link size="lg" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
</div>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link size="sm" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
<Link size="md" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
<Link size="lg" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
```

## Font Weight

Link has `bold` prop to decide the font weight of Link component.

<div class="flex flex-col gap-2">
	<Link bold="thin" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link bold="medium" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
	<Link bold="bold" href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>
</div>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link bold="thin" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
<Link bold="medium" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
<Link bold="bold" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
```

## Underline Type

Link has `underline` prop to decide the text decoration(underline) of the link.

<div class="flex flex-col gap-2">
	<Link underlineType="none" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>This one's underlineType is "none"</Link
	>
	<Link underlineType="hover" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>This one's underlineType is "hover"</Link
	>
	<Link underlineType="always" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>This one's underlineType is "always"</Link
	>
	<Link underlineType="active" href="https://github.com/s-ui-org/s-ui" target="_blank"
		>This one's underlineType is "active"</Link
	>
</div>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link underlineType="none" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This one's underlineType is "none"
</Link>
<Link underlineType="hover" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This one's underlineType is "hover"
</Link>
<Link underlineType="always" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This one's underlineType is "always"
</Link>
<Link underlineType="active" href="https://github.com/s-ui-org/s-ui" target="_blank">
	This one's underlineType is "active"
</Link>
```

## Disabled

Link has `disabled` prop to defines if the link is disalbe.

<Link disabled href="https://github.com/s-ui-org/s-ui" target="_blank">This is link to the our Github page</Link>

```svelte
<script>
	import { Link } from '$lib';
</script>

<Link disabled={true} href="https://github.com/s-ui-org/s-ui" target="_blank">
	This is link to the our Github page
</Link>
```

## API

Link provides APIs(Properties) that is necessary for you to configure a Link compponent.

### Link Props

<PropertyTable properties={linkProps} />