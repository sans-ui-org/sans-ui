---
layout: componentLayout
title: TextArea
description: Textarea component is a multi-line TextArea which allows you to write large texts.
category: Components
---

<script>
	import { TextArea } from '$lib';
	import PropertyTable from "../../../global-components/PropertyTable.svelte"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import textareaProps from "./textarea-props.ts"

</script>

## Set Up

Import a Textarea component in the script tag.

```svelte
<script>
	import { TextArea } from '$lib';
</script>
```

## Usage

Use the Textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants

<div class="w-[350px]">
	<TextArea label="This is label" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea label="This is label" placeholder="Please type something here" />
```

## Variant

Textarea has `variant` prop to decide the color theme of it.

<div class="w-[350px]">
	<TextArea variant="success" label="This is label" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea variant="success" label="This is label" placeholder="Please type something here" />
```

## Value

TextArea has `value` prop that defines the value of the input.

<div class="w-[350px]">
	<TextArea value="hello world" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea value="hello world" placeholder="Please type something here" />
```

## Size

TextArea has `size` prop defines the font size of the input.

<div class="w-[350px]">
	<TextArea size="sm" placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea size="sm" placeholder="Please type something here" />
```

## Disabled

TextArea has `disabled` prop that defines if the input is disabled.

<div class="w-[350px]">
	<TextArea disabled={true} placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea disabled={true} placeholder="Please type something here" />
```

## ReadOnly

TextArea has `readonly` prop that defines if the input is readonly.

<div class="w-[350px]">
	<TextArea readonly={true} placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea readonly={true} placeholder="Please type something here" />
```

## Max Count

TextArea has `maxCount` prop that defines the text limitation of your TextArea component.

<div class="w-[350px]">
	<TextArea value="hello world" maxCount={25} placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea value="hello world" maxCount={25} placeholder="Please type something here" />
```

## Invalid

TextArea has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<div class="w-[350px]">
	<TextArea label="This is label" invalid={true} invalidText="This is invalid text." placeholder="Please type something here" />
</div>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea
	label="This is label"
	invalid={true}
	invalidText="This is invalid text."
	placeholder="Please type something here"
/>
```

## API

TextArea provides APIs(Properties) that is necessary for you to configure a TextArea compponent.

### TextArea Props

<PropertyTable properties={textareaProps} />
