---
layout: componentLayout
title: Button
description: The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.
category: component
githubFolder: /button/Button.svelte
storybookFolder: button
toc: [
			{ slug: 'set-up', title: 'Set Up', level: 0 },
			{ slug: 'usage', title: 'Usage', level: 0 },
			{ slug: 'variant', title: 'Variant', level: 1 },
			{ slug: 'size', title: 'Size', level: 1 },
			{ slug: 'kind', title: 'Kind', level: 1 },
			{ slug: 'rounded', title: 'Rounded', level: 1 },
			{ slug: 'disabled', title: 'Disabled', level: 1 },
			{ slug: 'rippled', title: 'Rippled', level: 1 },
			{ slug: 'animation', title: 'Animation', level: 1 },
			{ slug: 'icon-button', title: 'Icon Button', level: 1 },
			{ slug: 'button-as-link', title: 'Button as Link', level: 1 },
			{ slug: 'accessibility', title: 'Accessibility', level: 0 },
			{ slug: 'api', title: 'API', level: 0 },
			{ slug: 'button-props', title: 'Button Props', level: 1 },
			{ slug: 'button-handlers', title: 'Button Handlers', level: 1 },
			{ slug: 'button-slots', title: 'Button Slots', level: 1 },
		]
prevButton: { title: 'Installation', slug: '/docs/installation' }
nextButton: { title: 'Checkbox', slug: '/components/checkbox' }
---

<script>
	import { Button, Link } from '$lib';
	import { PropertyTable, HandlerTable, SlotTable, CodeBlockWrapper, AccessibilityListItem }from "../../../mdsvex/components/index.ts"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { buttonProps, buttonHandlers, buttonSlots } from "./button-props.ts"

</script>

## Set Up

To use the <code>Button</code> component, first import it in the script tag:

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>
```

</CodeBlockWrapper>

## Usage

Buttons allow users to perform actions with a single click. You can also disable the ripple effect, which we will cover later on <Link href="#rippled">this rippled section</Link>.

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

The `variant` prop lets you customize the color theme of the button:

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

Use the `size` prop to control the button's size:

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

The `kind` prop determines the button's appearance:

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

Adjust the button's border-radius with the `rounded` prop:

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

Disable the button using the `disabled` prop:

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

To disable the ripple effect, use the `rippled` prop:

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

Control the background color transition animation with the `animation` prop. Note that this does not affect the ripple effect, which must be controlled separately via <Link href="#rippled">the rippled property</Link>.

<Button animation={false}>Button</Button>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button animation={false}>Button</Button>
```

</CodeBlockWrapper>

## Button as Link

The `href` prop allows the button to function as a `link`, making it behave like an anchor element:

<Button href="https://github.com/sans-ui-org/sans-ui" rel='noopener noreferrer' target='_blank'>Link to External</Button>

<CodeBlockWrapper>

```svelte
<script>
	import { Button } from '@sans-ui';
</script>

<Button href="https://github.com/sans-ui-org/sans-ui" rel="noopener noreferrer" target="_blank"
	>Link to External</Button
>
```

</CodeBlockWrapper>

## Icon Button

To create an icon-only button, use the `iconOnly` prop:

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

<ul class="flex flex-col gap-3 ml-10 mt-4">
	<AccessibilityListItem>Keyboard focus management and cross browser normalization.</AccessibilityListItem>
	<AccessibilityListItem>Hover management and cross browser normalization.</AccessibilityListItem>
	<AccessibilityListItem>Exposed as a tooltip to assistive technology via ARIA.</AccessibilityListItem>
	<AccessibilityListItem>Matches native tooltip behavior with delay on hover of first tooltip and no delay on subsequent tooltips.</AccessibilityListItem>
</ul>

## API

Button provides APIs(Properties) that is necessary for you to configure a <code>Button</code> compponent.

### Button Props

<PropertyTable properties={buttonProps} />

### Button Handlers

<HandlerTable handlers={buttonHandlers} />

### Button Slots

<SlotTable slots={buttonSlots} />
