---
layout: componentLayout
title: Select
description: A select displays a collapsible list of options and allows a user to select one or more of them.
category: component
githubFolder: /select/Select.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'rounded', title: 'Rounded', level: 1 },
			{ slug: 'default-selected', title: 'Default Selected', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'readonly', title: 'ReadOnly', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'invalid', title: 'Invalid', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'select-props', title: 'Select Props', level: 1 },
			{ slug: 'select-handlers', title: 'Select Handlers', level: 1 },
			{ slug: 'select-slots', title: 'Select Slots', level: 1 },
		]
---

<script>
	import { Button, Select } from '$lib';
	import SelectTemplate from "../../../../stories/select/templates/SelectTemplate.svelte"
	import { PropertyTable, SlotTable, HandlerTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { selectProps, selectHandlers, selectSlots } from "./select-props.ts"

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' },
	]

	let defaultSelected = options[0]
</script>

## Set Up

Import a Select component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Select } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list

<div class="w-[350px]">
	<SelectTemplate {options} label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Select } from '@sans-ui';

	let popupSelect = false;
	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Variant

Select has `variant` prop to decide the color theme of it.

<div class="flex flex-col gap-4">
	<div class="w-[350px]">
		<SelectTemplate variant="primary" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="secondary" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="success" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="warning" {options} label="This is a label" placeholder="Select an option" />
	</div>
	<div class="w-[350px]">
		<SelectTemplate variant="danger" {options} label="This is a label" placeholder="Select an option" />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select variant="primary" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="secondary" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="success" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="warning" {options} placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select variant="danger" {options} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Size

Select has `size` prop to decide the size of it.

<div class="flex flex-row gap-4">
	<div class="w-[250px]">
		<SelectTemplate {options} size="sm" label='This is sm' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} size="md" label='This is md' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} size="lg" label='This is lg' placeholder='Select an option' />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} size="sm" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="md" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="lg" placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Rounded

Select has `rounded` prop to update Select component's border-radius.

<div class="flex flex-col gap-4">
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="none" label='This is rounded none' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="sm" label='This is rounded sm' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="md" label='This is rounded md' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="lg" label='This is rounded lg' placeholder='Select an option' />
	</div>
	<div class="w-[250px]">
		<SelectTemplate {options} rounded="full" label='This is rounded full' placeholder='Select an option' />
	</div>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<label class="field">
	"This is a label"
	<Select {options} size="none" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="sm" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="md" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="lg" placeholder="Select an option" />
</label>
<label class="field">
	"This is a label"
	<Select {options} size="full" placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Default Selected

Select has `defaultSelected` prop that defines the default selected value of the select.

<div class="w-[350px]">
	<SelectTemplate {options} defaultSelected={defaultSelected} placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
	let defaultSelected = options[0];
</script>

<label class="field">
	"This is a label"
	<Select {options} {defaultSelected} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Disabled

Select has `disabled` prop that defines if the select is disabled.

<div class="w-[350px]">
	<SelectTemplate {options} disabled label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} disabled={true} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Read Only

Select has `readonly` prop that defines if the select is readonly.

<div class="w-[350px]">
	<SelectTemplate {options} readonly label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} readonly={true} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Animation

Select has `animation` prop that defines if the select has animation.

<div class="w-[350px]">
	<SelectTemplate {options} animation={false} label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select {options} animation={false} placeholder="Select an option" />
</label>
```

</CodeBlockWrapper>

## Invalid

Select has `invalid` prop that defines if the input is invalid. And `invalidText` to set error message when `invalid` is `true`.

<div class="w-[350px]">
	<SelectTemplate {options} invalid invalidText="This is invalid text." label='This is a label' placeholder='Select an option' />
</div>

<CodeBlockWrapper>

```svelte
<script lang="ts">
	import { Button, Select } from '@sans-ui';

	let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
		{ value: '4', label: 'Option 4' }
	];
</script>

<label class="field">
	"This is a label"
	<Select
		{options}
		invalid={true}
		invalidText="This is invalid text."
		placeholder="Select an option"
	/>
</label>
```

</CodeBlockWrapper>

## Accessibility

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support for selecting a single option.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support for disabled options.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support for sections.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Labeling support for accessibility.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support for description and error message help text linked to the input via ARIA.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Support for mouse, touch, and keyboard interactions.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/>Tab stop focus management.</div>
  <!-- TODO: Support for mobile form navigation via software keyboard. -->

## API

Select provides APIs(Properties) that is necessary for you to configure a Select compponent.

### Select Props

<PropertyTable properties={selectProps} />

### Select Handlers

<HandlerTable handlers={selectHandlers} />

### Select Slots

<SlotTable slots={selectSlots} />
