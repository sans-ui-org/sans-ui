---
layout: componentLayout
title: Textarea
description: Textarea component is a multi-line Textarea which allows you to write large texts.
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
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { textareaSlots, textareaHandlers, textareaProps } from "./textarea-props.ts"

</script>

## Set Up

Import a Textarea component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Textarea } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

Use the Textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants

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

Textarea has `variant` prop to decide the color theme of it.

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

Textarea has `value` prop that defines the value of the input.

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

Textarea has `size` prop defines the font size of the input.

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

Textarea has `rounded` prop defines the roundness of the input.

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

Textarea has `disabled` prop that defines if the input is disabled.

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

Textarea has `readonly` prop that defines if the input is readonly.

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

Textarea has `animation` prop that defines if the input has animation or not.

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

Textarea has `maxCount` prop that defines the text limitation of your Textarea component.

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

Textarea has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

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

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Built with a native HTML input element.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Visual and ARIA labeling support.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Change, clipboard, composition, selection, and input event support.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Required and invalid states exposed to assistive technology via ARIA.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support for description and error message help text linked to the input via ARIA.</div>

## API

Textarea provides APIs(Properties) that is necessary for you to configure a Textarea compponent.

### Textarea Props

<PropertyTable properties={textareaProps} />

### Textarea Handlers

<HandlerTable handlers={textareaHandlers} />

### Textarea Slots

<SlotTable slots={textareaSlots} />
