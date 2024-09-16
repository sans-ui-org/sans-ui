---
layout: componentLayout
title: Button
description: The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.
category: component
githubFolder: /button/Button.svelte
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 0 },
			{ slug: 'size', title: 'Size', level: 0 },
			{ slug: 'kind', title: 'Kind', level: 0 },
			{ slug: 'rounded', title: 'Rounded', level: 0 },
			{ slug: 'disabled', title: 'Disabled', level: 0 },
			{ slug: 'rippled', title: 'Rippled', level: 0 },
			{ slug: 'animation', title: 'Animation', level: 0 },
			{ slug: 'icon-button', title: 'Icon Button', level: 0 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'button-props', title: 'Button Props', level: 1 },
			{ slug: 'button-slots', title: 'Button Slots', level: 1 },
		]
---

<script>
	import { Button, Link } from '$lib';
	import { PropertyTable, SlotTable, CodeBlockWrapper, AccessibilityIcon }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { buttonProps, buttonSlots } from "./button-props.ts"

</script>

## Set Up

Import a button component in the script tag.

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

Buttons allow users to perform actions and choose with a single tap. You can deactivate the ripple effect, so we will state that later on.

<Button>Button</Button>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button>Button</Button>
```

</CodeBlockWrapper>

## Variant

Buttons has `variant` prop to decide the color theme of it.

<div class="inline-flex flex-row gap-4 flex-wrap">
	<Button variant="primary">Button</Button>
	<Button variant="secondary">Button</Button>
	<Button variant="success">Button</Button>
	<Button variant="warning">Button</Button>
	<Button variant="danger">Button</Button>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button variant="primary">Button</Button>
<Button variant="secondary">Button</Button>
<Button variant="success">Button</Button>
<Button variant="warning">Button</Button>
<Button variant="danger">Button</Button>
```

</CodeBlockWrapper>

## Size

Buttons has `size` prop to decide the size of it.

<div class="flex flex-row gap-4 items-center">
	<Button size="sm">Button</Button>
	<Button size="md">Button</Button>
	<Button size="lg">Button</Button>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button size="sm">Button</Button>
<Button size="md">Button</Button>
<Button size="lg">Button</Button>
```

</CodeBlockWrapper>

## Kind

Buttons has `kind` prop to decide the kind of Button component.

<div class="flex flex-row gap-2 flex-wrap">
	<Button kind="solid">Solid</Button>
	<Button kind="bordered">Bordered</Button>
	<Button kind="flat">Flat</Button>
	<Button kind="shadow">Shadow</Button>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button kind="solid">Solid</Button>
<Button kind="bordered">Bordered</Button>
<Button kind="flat">Flat</Button>
<Button kind="shadow">Shadow</Button>
```

</CodeBlockWrapper>

## Rounded

Buttons has `rounded` prop to update Button component's border-radius.

<div class="flex flex-row gap-2 flex-wrap">
	<Button rounded="none">rounded none</Button>
	<Button rounded="sm">rounded sm</Button>
	<Button rounded="md">rounded md</Button>
	<Button rounded="lg">rounded lg</Button>
	<Button rounded="full">rounded full</Button>
</div>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button rounded="none">rounded none</Button>
<Button rounded="sm">rounded sm</Button>
<Button rounded="md">rounded md</Button>
<Button rounded="lg">rounded lg</Button>
<Button rounded="full">rounded full</Button>
```

</CodeBlockWrapper>

## Disabled

Buttons has `disabled` prop to disable Button component.

<Button disabled>Button</Button>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button disabled>Button</Button>
```

</CodeBlockWrapper>

## Rippled

Buttons has `rippled` prop to disable Button component's ripple effect.

<Button rippled={false}>Button</Button>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button rippled={false}>Button</Button>
```

</CodeBlockWrapper>

## Animation

Buttons has `animation` prop to control the Button's background color transition animation.(Ripple effect can't be disabled by this prop. Please refer to <Link href="#rippled">rippled property</Link>.)

<Button animation={false}>Button</Button>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button animation={false}>Button</Button>
```

</CodeBlockWrapper>

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

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button iconOnly={true}>
	<!-- You icon or image here -->
</Button>
```

</CodeBlockWrapper>

## Accessibility

- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/> Keyboard focus management and cross browser normalization.</div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/> Hover management and cross browser normalization. </div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/> Labeling support for screen readers `aria-describedby`. </div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/> Exposed as a tooltip to assistive technology via ARIA. </div>
- <div class="flex flex-row items-center gap-4"><AccessibilityIcon class="w-5 h-5"/> Matches native tooltip behavior with delay on hover of first tooltip and no delay on subsequent tooltips. </div>

## API

Button provides APIs(Properties) that is necessary for you to configure a Button compponent.

### Button Props

<PropertyTable properties={buttonProps} />

### Button Slots

<SlotTable slots={buttonSlots} />
