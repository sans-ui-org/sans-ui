---
layout: componentLayout
title: Input
description: The input component is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available.
category: component
githubFolder: /input/Input.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'label', title: 'Label', level: 0 },
			{ slug: 'value', title: 'Value', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'rounded', title: 'Rounded', level: 0 },
			{ slug: 'disabled', title: 'Disabled', level: 0 },
			{ slug: 'readonly', title: 'ReadOnly', level: 0 },
			{ slug: 'clearable', title: 'Clearable', level: 0 },
			{ slug: 'animation', title: 'Animation', level: 0 },
			{ slug: 'max-count', title: 'Max Count', level: 0 },
			{ slug: 'invalid', title: 'Invalid', level: 0 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'input-props', title: 'Input Props', level: 1 },
			{ slug: 'input-slots', title: 'Input Slots', level: 1 },
		]
---

<script>
	import { Input } from '$lib';
	import SlotTable from "../../../mdsvex/components/SlotTable.svelte"
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { inputProps, inputSlots } from "./input-props.ts"

</script>

## Set Up

Import a Input component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

<div class="w-[350px]">
	<Input label="This is label" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input label="This is label" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Variant

Input has `variant` prop to decide the color theme of it.

<div class="w-[350px] flex flex-col gap-2">
	<Input variant="primary" placeholder="Please type something here" />
	<Input variant="secondary" placeholder="Please type something here" />
	<Input variant="success" placeholder="Please type something here" />
	<Input variant="warning" placeholder="Please type something here" />
	<Input variant="danger" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

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

</CodeBlockWrapper>

## Label

Input has `label` prop defines the label of the input.

<div class="w-[350px]">
	<Input label="This is label" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input label="This is label" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Value

Input has `value` prop that defines the value of the input.

<div class="w-[350px]">
	<Input value="hello world" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input value="hello world" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Size

Input has `size` prop defines the size of the input.

<div class="w-[350px]">
	<Input size="sm" placeholder="Please type something here" />
	<Input size="md" placeholder="Please type something here" />
	<Input size="lg" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input size="sm" placeholder="Please type something here" />
<Input size="md" placeholder="Please type something here" />
<Input size="lg" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Rounded

Input has `rounded` prop to update Input component's border-radius.

<div class="w-[350px]">
	<Input rounded="none" placeholder="Please type something here" />
	<Input rounded="sm" placeholder="Please type something here" />
	<Input rounded="md" placeholder="Please type something here" />
	<Input rounded="lg" placeholder="Please type something here" />
	<Input rounded="full" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '$lib';
</script>

<Input rounded="none" placeholder="Please type something here" />
<Input rounded="sm" placeholder="Please type something here" />
<Input rounded="md" placeholder="Please type something here" />
<Input rounded="lg" placeholder="Please type something here" />
<Input rounded="full" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Disabled

Input has `disabled` prop that defines if the input is disabled.

<div class="w-[350px]">
	<Input disabled={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input disabled={true} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## ReadOnly

Input has `readonly` prop that defines if the input is readonly.

<div class="w-[350px]">
	<Input readonly={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input readonly={true} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Clearable

Input has `clearable` prop that controls the clear button for Input component. (What is clear button? -> As soon as you start typing something in Input component, you will see x button on the left side of the component.)

<div class="w-[350px]">
	<Input clearable={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input clearable={true} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Animation

Input has `animation` prop that controls whether the input has animation or not.

<div class="w-[350px]">
	<Input animation={false} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input animation={false} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Max Count

Input has `maxCount` prop that defines the text limitation of your Input component.

<div class="w-[350px]">
	<Input label="This is label" maxCount={25} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '$lib';
</script>

<Input maxCount={25} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Invalid

Input has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<div class="w-[350px]">
	<Input invalid={true} invalidText="This is invalid text." placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

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

</CodeBlockWrapper>

## Accessibility

- Built with a native `<input>` element.
- Visual and ARIA labeling support.
- Change, clipboard, composition, selection, and input event support.
- Required and invalid states exposed to assistive technology via ARIA.
- Support for description and error message help text linked to the input via ARI

## API

Input provides APIs(Properties) that is necessary for you to configure a Input compponent.

### Input Props

<PropertyTable properties={inputProps} />

### Input Slots

<SlotTable slots={inputSlots} />
