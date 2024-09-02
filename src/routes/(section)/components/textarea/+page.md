---
layout: componentLayout
title: TextArea
description: Textarea component is a multi-line TextArea which allows you to write large texts.
category: component
githubFolder: /textArea/TextArea.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'value', title: 'Value', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'disabled', title: 'Disabled', level: 0 },
			{ slug: 'readonly', title: 'ReadOnly', level: 0 },
			{ slug: 'max-count', title: 'Max Count', level: 0 },
			{ slug: 'invalid', title: 'Invalid', level: 0 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'textarea-props', title: 'Textarea Props', level: 1 },
			{ slug: 'textarea-slots', title: 'Textarea Slots', level: 1 },
		]
---

<script>
	import { TextArea } from '$lib';
	import SlotTable from "../../../mdsvex/components/SlotTable.svelte"
	import PropertyTable from "../../../mdsvex/components/PropertyTable.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { textareaSlots, textareaProps } from "./textarea-props.ts"

</script>

## Set Up

Import a Textarea component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>
```

</CodeBlockWrapper>

## Usage

Use the Textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants

<div class="w-[350px]">
	<TextArea label="This is label" variant="primary" placeholder="Please type something here" />
	<TextArea label="This is label" variant="secondary" placeholder="Please type something here" />
	<TextArea label="This is label" variant="success" placeholder="Please type something here" />
	<TextArea label="This is label" variant="warning" placeholder="Please type something here" />
	<TextArea label="This is label" variant="danger" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea label="This is label" variant="primary" placeholder="Please type something here" />
<TextArea label="This is label" variant="secondary" placeholder="Please type something here" />
<TextArea label="This is label" variant="success" placeholder="Please type something here" />
<TextArea label="This is label" variant="warning" placeholder="Please type something here" />
<TextArea label="This is label" variant="danger" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Variant

Textarea has `variant` prop to decide the color theme of it.

<div class="w-[350px]">
	<TextArea variant="success" label="This is label" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea variant="success" label="This is label" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Value

TextArea has `value` prop that defines the value of the input.

<div class="w-[350px]">
	<TextArea value="hello world" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea value="hello world" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Size

TextArea has `size` prop defines the font size of the input.

<div class="w-[350px]">
	<TextArea size="sm" placeholder="Please type something here" />
	<TextArea size="md" placeholder="Please type something here" />
	<TextArea size="lg" placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea size="sm" placeholder="Please type something here" />
<TextArea size="md" placeholder="Please type something here" />
<TextArea size="lg" placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Disabled

TextArea has `disabled` prop that defines if the input is disabled.

<div class="w-[350px]">
	<TextArea disabled={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea disabled={true} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## ReadOnly

TextArea has `readonly` prop that defines if the input is readonly.

<div class="w-[350px]">
	<TextArea readonly={true} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea readonly={true} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Max Count

TextArea has `maxCount` prop that defines the text limitation of your TextArea component.

<div class="w-[350px]">
	<TextArea value="hello world" maxCount={25} placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { TextArea } from '$lib';
</script>

<TextArea value="hello world" maxCount={25} placeholder="Please type something here" />
```

</CodeBlockWrapper>

## Invalid

TextArea has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<div class="w-[350px]">
	<TextArea label="This is label" invalid={true} invalidText="This is invalid text." placeholder="Please type something here" />
</div>

<CodeBlockWrapper>

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

</CodeBlockWrapper>

## Accessibility

* Built with a native `<input>` element.
* Visual and ARIA labeling support.
* Change, clipboard, composition, selection, and input event support.
* Required and invalid states exposed to assistive technology via ARIA.
* Support for description and error message help text linked to the input via ARIA.

## API

TextArea provides APIs(Properties) that is necessary for you to configure a TextArea compponent.

### TextArea Props

<PropertyTable properties={textareaProps} />

### TextArea Slots

<SlotTable slots={textareaSlots} />
