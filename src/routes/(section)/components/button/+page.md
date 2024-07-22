---
layout: componentLayout
title: Button
description: The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.
category: Components
---

<script>
	import { Button } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import buttonProps from "./button-props.ts"

</script>

## Set Up

Import a button component in the script tag.

```svelte
<script>
	import { Button } from '$lib';
</script>
```

## Usage

Buttons allow users to perform actions and choose with a single tap. You can deactivate the ripple effect, so we will state that later on.

<Button>Button</Button>

<!-- TODO: <LiveDemo> -->

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button>Button</Button>
```

<!-- </LiveDemo> -->

## Variant

Buttons has `variant` prop to decide the color theme of it.

<Button variant="success">Button</Button>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button variant="success">Button</Button>
```

## API

Button provides APIs(Properties) that is necessary for you to configure a Button compponent.

### Button Props

<PropertyTable properties={buttonProps} />
