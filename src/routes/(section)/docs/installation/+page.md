---
layout: componentLayout
title: Let's install
description: This is the installation procedure of S-UI library to make sure that you are ready to use this library!
category: documentation
toc: [
			{ slug: 'before-you-install', title: 'Before you install', level: 0 },
			{ slug: 'for-svelte', title: 'For Svelte', level: 1 },
			{ slug: 'for-svelte-kit', title: 'For SvelteKit', level: 1 },
			{ slug: 'let’s-install-s-ui', title: "Let's install S-UI", level: 0 },
			{ slug: 'you-are-ready!', title: "You are ready!", level: 0 },
		]
---

<script>
  import { Link } from "$lib"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import CodeBlockWrapper from "../../../mdsvex/components/CodeBlockWrapper.md"
</script>

## Before you install

Before you install S-UI into your project, make sure that your project is based on Svelte/Svelte Kit.
(You don't need to install Tailwind CSS at all, however our project is built with Tailwind CSS.)

### For Svelte

You can initiate your Svelte project with the following code.

<CodeBlockWrapper>

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
```

</CodeBlockWrapper>

### For Svelte Kit

You can initiate your Svelte Kit project with the following code.

<CodeBlockWrapper>

```bash
npm create svelte@latest my-app
cd my-app
```

</CodeBlockWrapper>

## Let's install S-UI

To install S-UI into your project, we need to run this command.

<CodeBlockWrapper>

```bash
# For NPM
npm install s-ui

# For YARN
yarn add s-ui

# For PNPM
pnpm install s-ui
```

</CodeBlockWrapper>

## You are ready!

You are pretty much ready to use S-UI! Let's take a look at each component so we can understand <Link href="/components/button">how to use them</Link>!

<!-- TODO: Next page nevigator -> navigate the users to the page that you intended. -->
