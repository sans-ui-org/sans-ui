---
layout: componentLayout
title: Input
description: The input component is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available.
category: Components
---

<script>
	import { Input } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import inputProps from "./input-props.ts"

</script>

## Set Up

Import a Input component in the script tag.

```svelte
<script>
	import { Input } from '$lib';
</script>
```

## Usage

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

<div class="w-[350px]">
	<Input placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input placeholder="Please type something here" />
```

## Variant

Input has `variant` prop to decide the color theme of it.

<div class="w-[350px] flex flex-col gap-2">
	<Input variant="primary" placeholder="Please type something here" />
	<Input variant="secondary" placeholder="Please type something here" />
	<Input variant="success" placeholder="Please type something here" />
	<Input variant="warning" placeholder="Please type something here" />
	<Input variant="danger" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input variant="primary" placeholder="Please type something here" />
<Input variant="secondary" placeholder="Please type something here" />
<Input variant="success" placeholder="Please type something here" />
<Input variant="warning" placeholder="Please type something here" />
<Input variant="danger" placeholder="Please type something here" />
```

## Label

Input has `label` prop defines the label of the input.

<div class="w-[350px]">
	<Input label="This is label" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input label="This is label" placeholder="Please type something here" />
```

## Value

Input has `value` prop that defines the value of the input.

<div class="w-[350px]">
	<Input value="hello world" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input value="hello world" placeholder="Please type something here" />
```

## Size

Input has `size` prop defines the size of the input.

<div class="w-[350px]">
	<Input size="sm" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input size="sm" placeholder="Please type something here" />
```

## Disabled

Input has `disabled` prop that defines if the input is disabled.

<div class="w-[350px]">
	<Input disabled={true} placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input disabled={true} placeholder="Please type something here" />
```

## ReadOnly

Input has `readonly` prop that defines if the input is readonly.

<div class="w-[350px]">
	<Input readonly={true} placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input readonly={true} placeholder="Please type something here" />
```

## Clearable

Input has `clearable` prop that controls the clear button for Input component. (What is clear button? -> As soon as you start typing something in Input component, you will see x button on the left side of the component.)

<div class="w-[350px]">
	<Input readonly={true} placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input readonly={true} placeholder="Please type something here" />
```

## Max Count

Input has `maxCount` prop that defines the text limitation of your Input component.

<div class="w-[350px]">
	<Input maxCount={25} placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input maxCount={25} placeholder="Please type something here" />
```

## Invalid

Input has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<div class="w-[350px]">
	<Input invalid={true} invalidText="This is invalid text." placeholder="Please type something here" />
</div>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input
	invalid={true}
	invalidText="This is invalid text."
	placeholder="Please type something here"
/>
```

## API

Input provides APIs(Properties) that is necessary for you to configure a Input compponent.

### Input Props

<PropertyTable properties={inputProps} />
