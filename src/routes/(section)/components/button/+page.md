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

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button>Button</Button>
```

## Variant

Buttons has `variant` prop to decide the color theme of it.

<div class="inline-flex flex-row gap-4">
	<Button variant="primary">Button</Button>
	<Button variant="secondary">Button</Button>
	<Button variant="success">Button</Button>
	<Button variant="warning">Button</Button>
	<Button variant="danger">Button</Button>
</div>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button variant="primary">Button</Button>
<Button variant="secondary">Button</Button>
<Button variant="success">Button</Button>
<Button variant="warning">Button</Button>
<Button variant="danger">Button</Button>
```

## Size

Buttons has `size` prop to decide the size of it.

<div class="flex flex-row gap-4 items-center">
	<Button size="sm">Button</Button>
	<Button size="md">Button</Button>
	<Button size="lg">Button</Button>
</div>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button size="sm">Button</Button>
<Button size="md">Button</Button>
<Button size="lg">Button</Button>
```

## Kind

Buttons has `kind` prop to decide the kind of Button component.

<div class="flex flex-row gap-2">
	<Button kind="solid">Solid</Button>
	<Button kind="bordered">Bordered</Button>
	<Button kind="flat">Flat</Button>
	<Button kind="shadow">Shadow</Button>
</div>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button kind="solid">Solid</Button>
<Button kind="bordered">Bordered</Button>
<Button kind="flat">Flat</Button>
<Button kind="shadow">Shadow</Button>
```

## Rounded

Buttons has `rounded` prop to update Button component's border-radius.

<div class="flex flex-row gap-2">
	<Button rounded="none">rounded none</Button>
	<Button rounded="sm">rounded sm</Button>
	<Button rounded="md">rounded md</Button>
	<Button rounded="lg">rounded lg</Button>
	<Button rounded="full">rounded full</Button>
</div>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button rounded="none">rounded none</Button>
<Button rounded="sm">rounded sm</Button>
<Button rounded="md">rounded md</Button>
<Button rounded="lg">rounded lg</Button>
<Button rounded="full">rounded full</Button>
```

## Disabled

Buttons has `disabled` prop to disable Button component.

<Button disabled>Button</Button>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button disabled>Button</Button>
```

## Rippled

Buttons has `rippled` prop to disable Button component's ripple effect.

<Button rippled={false}>Button</Button>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button rippled={false}>Button</Button>
```

## Icon Button

You can turn our Button component into Icon Button component by passing `iconOnly` as `true`.

<Button iconOnly={true}>
	<svg class="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_1222_36554)">
			<path d="M7 0.5V13.5" stroke="white" stroke-width="2px" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M0.5 6.95996H13.5" stroke="white" stroke-width="2px" stroke-linecap="round" stroke-linejoin="round"/>
		</g>
	</svg>
</Button>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Button iconOnly={true}>
	<svg
		class="w-[14px] h-[14px]"
		viewBox="0 0 14 14"
		fill="white"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_1222_36554)">
			<path
				d="M7 0.5V13.5"
				stroke="white"
				stroke-width="2px"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M0.5 6.95996H13.5"
				stroke="white"
				stroke-width="2px"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</Button>
```

## API

Button provides APIs(Properties) that is necessary for you to configure a Button compponent.

### Button Props

<PropertyTable properties={buttonProps} />
