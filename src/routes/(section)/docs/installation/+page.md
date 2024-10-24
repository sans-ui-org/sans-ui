---
layout: componentLayout
title: Let's install.
description: Follow this guide to install the SanS UI library and ensure your environment is ready to use the library effectively.
category: documentation
toc: [
			{ slug: 'before-you-install', title: 'Before you install', level: 0 },
			{ slug: 'for-svelte-kit', title: 'For SvelteKit', level: 1 },
			{ slug: 'for-svelte-(not-recommended)', title: 'For Svelte', level: 1 },
			{ slug: 'configure-tailwindcss', title: "Configure TailwindCSS", level: 0 },
			{ slug: 'install-sans-ui', title: "Install SanS UI", level: 0 },
			{ slug: 'you-are-ready!', title: "You are ready!", level: 0 },
		]
nextButton: { title: 'Button', slug: '/components/button' }
prevButton: { title: 'Getting Started', slug: '/docs/getting-started' }
---

<script>
  import { Link } from "$lib"
	import * as Component from "../../../mdsvex/+layout.svelte"
	import { CodeBlockWrapper, Blockquote } from "../../../mdsvex/components"
</script>

## Before you install

Before adding SanS UI to your project, ensure it's based on either <Link href="https://svelte.dev/" external>Svelte</Link> or <Link href="https://svelte.dev/docs/introduction" external>SvelteKit</Link>. If you haven't initialized a Svelte project yet, follow the steps below.

### For Svelte Kit

To initialize a SvelteKit project, use the following commands. You can also refer to <Link href="https://kit.svelte.dev/docs/creating-a-project" external >the official SvelteKit documentation</Link> for more details on getting started.

<CodeBlockWrapper title="On your terminal" icon="bash">

```bash
npx sv create my-app
cd my-app
npm install
npm run dev
```

</CodeBlockWrapper>

### For Svelte (Not recommended)

According to <Link href="https://svelte.dev/docs/svelte/getting-started" external >the official Svelte documentation</Link>, using SvelteKit is recommended.

## Configure TailwindCSS

SanS UI is built using <Link href="https://tailwindcss.com/" external>Tailwind CSS</Link>, so you'll need to install it first. Please refer to <Link href="https://tailwindcss.com/docs/guides/sveltekit" external>the official Tailwind CSS installation guide</Link> for instructions. <br/><br/>
Once TailwindCSS is configured, you need to add the following code to your tailwind.config.js file:

<Blockquote>Please make sure you are pointing to the ROOT <code>node_modules</code></Blockquote>

<CodeBlockWrapper title="tailwind.config.js" icon="js">

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// ...
		// TODO: Make sure it's pointing to the ROOT node_module
		'./node_modules/sans-ui/**/*.{svelte,ts}'
	]
	// ...
};
```

</CodeBlockWrapper>

## Install SanS UI

After setting up Tailwind CSS, let's install SanS UI using the appropriate command for your package manager:

<CodeBlockWrapper title="On your terminal" icon="bash">

```bash
# For NPM
npm install @sans-ui/core

# For YARN
yarn add @sans-ui/core

# For PNPM
pnpm install @sans-ui/core
```

</CodeBlockWrapper>

## You are ready!

You’ve successfully installed SanS UI! Now, check out the <Link href="/components/button">Button component</Link> as an example to get started with using SanS UI components.

<!-- TODO: Next page nevigator -> navigate the users to the page that you intended. -->
