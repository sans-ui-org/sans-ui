---
layout: componentLayout
title: Textarea
description: The Textarea component provides a multi-line text input field, allowing users to enter larger blocks of text.
category: component
githubFolder: /textArea/Textarea.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'value', title: 'Value', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'rounded', title: 'Rounded', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'readonly', title: 'ReadOnly', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'max-count', title: 'Max Count', level: 1 },
			{ slug: 'invalid', title: 'Invalid', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'textarea-props', title: 'Textarea Props', level: 1 },
			{ slug: 'textarea-handlers', title: 'Textarea Handlers', level: 1 },
			{ slug: 'textarea-slots', title: 'Textarea Slots', level: 1 },
		]
---

<script>
	import { Textarea } from '$lib';
	import TextareaTemplate from "../../../../stories/textarea/templates/TextareaTemplate.svelte"
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { textareaSlots, textareaHandlers, textareaProps } from "./textarea-props.ts"

</script>

## Set Up

To start using the Textarea component, import it with the following code:

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

Here’s a basic example of the Textarea component in use:

<div class="w-[350px]">
	<TextareaTemplate label="This is label" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Variant

Customize the color theme of the Textarea with the `variant` prop. Available options include:

<div class="w-[350px] flex flex-col gap-4">
	<TextareaTemplate label="This is label" variant="primary" placeholder="Please type something here" />
	<TextareaTemplate label="This is label" variant="secondary" placeholder="Please type something here" />
	<TextareaTemplate label="This is label" variant="success" placeholder="Please type something here" />
	<TextareaTemplate label="This is label" variant="warning" placeholder="Please type something here" />
	<TextareaTemplate label="This is label" variant="danger" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea variant="primary" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea variant="secondary" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea variant="success" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea variant="warning" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea variant="danger" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Value

Set the initial text value of the Textarea using the `value` prop:

<div class="w-[350px]">
	<TextareaTemplate value="hello world" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea value="hello world" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Size

Adjust the text area size with the `size` prop to fit your design needs:k

<div class="w-[350px] flex flex-col gap-4">
	<TextareaTemplate size="sm" placeholder="Please type something here" />
	<TextareaTemplate size="md" placeholder="Please type something here" />
	<TextareaTemplate size="lg" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea size="sm" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea size="md" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea size="lg" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Rounded

Control the roundness of the Textarea corners with the `rounded` prop:

<div class="w-[350px] flex flex-col gap-4">
	<TextareaTemplate rounded="none" placeholder="Please type something here" />
	<TextareaTemplate rounded="sm" placeholder="Please type something here" />
	<TextareaTemplate rounded="md" placeholder="Please type something here" />
	<TextareaTemplate rounded="lg" placeholder="Please type something here" />
	<TextareaTemplate rounded="full" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea rounded="none" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea rounded="sm" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea rounded="md" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea rounded="lg" placeholder="Please type something here" />
</label>
<label class="field">
	This is label
	<Textarea rounded="full" placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Disabled

Make the Textarea non-interactive using the `disabled` prop:

<div class="w-[350px]">
	<TextareaTemplate disabled={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea disabled={true} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## ReadOnly

Set the Textarea to read-only mode with the `readonly` prop:

<div class="w-[350px]">
	<TextareaTemplate readonly={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea readonly={true} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Animation

Control whether the Textarea has animation with the `animation` prop:

<div class="w-[350px]">
	<TextareaTemplate animation={false} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea animation={false} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Max Count

Limit the number of characters that can be entered using the `maxCount` prop:

<div class="w-[350px]">
	<TextareaTemplate value="hello world" maxCount={25} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea value="hello world" maxCount={25} placeholder="Please type something here" />
</label>
```

</CodeBlockWrapper>

## Invalid

Indicate an invalid state with the `invalid` prop and provide an error message using `invalidText`:

<div class="w-[350px]">
	<TextareaTemplate label="This is label" invalid={true} invalidText="This is invalid text." placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>

<label class="field">
	This is label
	<Textarea
		invalid={true}
		invalidText="This is invalid text."
		placeholder="Please type something here"
	/>
</label>
```

</CodeBlockWrapper>

## Accessibility

<ul class="flex flex-col gap-2 ml-6">
	<AccessibilityListItem>Built with a native HTML input element.</AccessibilityListItem>
	<AccessibilityListItem>Visual and ARIA labeling support.</AccessibilityListItem>
	<AccessibilityListItem>Change, clipboard, composition, selection, and input event support.</AccessibilityListItem>
	<AccessibilityListItem>Required and invalid states exposed to assistive technology via ARIA.</AccessibilityListItem>
	<AccessibilityListItem>Support for description and error message help text linked to the input via ARIA.</AccessibilityListItem>
</ul>

## API

Textarea provides APIs(Properties) that is necessary for you to configure a Textarea compponent.

### Textarea Props

<PropertyTable properties={textareaProps} />

### Textarea Handlers

<HandlerTable handlers={textareaHandlers} />

### Textarea Slots

<SlotTable slots={textareaSlots} />
