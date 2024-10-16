---
layout: componentLayout
title: Input
description: The input component is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available.
category: component
githubFolder: /input/Input.svelte
storybookFolder: input
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'label', title: 'Label', level: 1 },
			{ slug: 'value', title: 'Value', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'rounded', title: 'Rounded', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'readonly', title: 'ReadOnly', level: 1 },
			{ slug: 'clearable', title: 'Clearable', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'max-count', title: 'Max Count', level: 1 },
			{ slug: 'invalid', title: 'Invalid', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'input-props', title: 'Input Props', level: 1 },
			{ slug: 'input-handlers', title: 'Input Handlers', level: 1 },
			{ slug: 'input-slots', title: 'Input Slots', level: 1 },
		]
prevButton: { title: 'Checkbox', slug: '/components/checkbox' }
nextButton: { title: 'Link', slug: '/components/link' }
---

<script>
	import { Input } from '$lib';
	import InputTemplate from "../../../../stories/input/templates/InputTemplate.svelte"
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { inputProps, inputHandlers, inputSlots } from "./input-props.ts"

</script>

## Set Up

To use the Input component, import it in the script tag:

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

This Input component can be used as a generic form element, supporting multiple input types such as text, email, password, number, URL, and phone number.

<div class="w-[350px]">
	<InputTemplate label="This is label" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input />
</label>
```

</CodeBlockWrapper>

## Variant

The `variant` prop allows you to control the color theme of the input:

<div class="w-[350px] flex flex-col gap-2">
	<InputTemplate variant="primary" placeholder="Please type something here" />
	<InputTemplate variant="secondary" placeholder="Please type something here" />
	<InputTemplate variant="success" placeholder="Please type something here" />
	<InputTemplate variant="warning" placeholder="Please type something here" />
	<InputTemplate variant="danger" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input variant="primary" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input variant="secondary" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input variant="success" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input variant="warning" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input variant="danger" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Label

Use the `label` prop to set a label for the input:

<div class="w-[350px]">
	<InputTemplate label="This is label" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Value

The `value` prop allows you to define the input's current value:

<div class="w-[350px]">
	<InputTemplate value="hello world" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input value="hello world" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Size

The `size` prop lets you adjust the size of the input:

<div class="w-[350px]">
	<InputTemplate size="sm" placeholder="Please type something here" />
	<InputTemplate size="md" placeholder="Please type something here" />
	<InputTemplate size="lg" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input size="sm" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input size="md" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input size="lg" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Rounded

The `rounded` prop adjusts the border-radius of the input:

<div class="w-[350px] flex flex-col gap-2">
	<InputTemplate rounded="none" placeholder="Please type something here" />
	<InputTemplate rounded="sm" placeholder="Please type something here" />
	<InputTemplate rounded="md" placeholder="Please type something here" />
	<InputTemplate rounded="lg" placeholder="Please type something here" />
	<InputTemplate rounded="full" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input rounded="none" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input rounded="sm" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input rounded="md" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input rounded="lg" placeholder="Please type something here" />
</label>
<label>
	'This is an input'
	<Input rounded="full" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Disabled

The `disabled` prop disables the input:

<div class="w-[350px]">
	<InputTemplate disabled={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input disabled={true} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## ReadOnly

Use the `readonly` prop to make the input field read-only:

<div class="w-[350px]">
	<InputTemplate readonly={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input readonly={true} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Clearable

The `clearable` prop adds a clear button to the input field, allowing the user to clear its contents:

<div class="w-[350px]">
	<InputTemplate clearable={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input readonly={true} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Animation

Control input animation with the `animation` prop:

<div class="w-[350px]">
	<InputTemplate animation={false} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input animation={false} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Max Count

The `maxCount` prop limits the number of characters the user can input:

<div class="w-[350px]">
	<InputTemplate label="This is label" maxCount={25} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input maxCount={25} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Invalid

The `invalid` prop marks the input as invalid and displays an error message using `invalidText`. `invalidText` to set error message when `invalid` is `true`:

<div class="w-[350px]">
	<InputTemplate invalid={true} invalidText="This is invalid text." placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Input } from '@sans-ui';
</script>

<label>
	'This is an input'
	<Input
		invalid={true}
		invalidText="This is invalid text."
		placeholder="Please type something here"
	/>
</label>
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-3 ml-10 mt-4">
	<AccessibilityListItem>Built with a native input element.</AccessibilityListItem>
	<AccessibilityListItem>Visual and ARIA labeling support.</AccessibilityListItem>
	<AccessibilityListItem>Handles events such as change, clipboard, composition, and input.</AccessibilityListItem>
	<AccessibilityListItem>Provides ARIA-based support for required and invalid states.</AccessibilityListItem>
	<AccessibilityListItem>Support for description and error message help text linked to the input via ARIA.</AccessibilityListItem>
</ul>

## API

Input provides APIs(Properties) that is necessary for you to configure a Input compponent.

### Input Props

<PropertyTable properties={inputProps} />

### Input Handlers

<HandlerTable handlers={inputHandlers} />

### Input Slots

<SlotTable slots={inputSlots} />
