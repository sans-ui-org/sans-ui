
This is going to be a Svelte UI library that anyone can contribute and improve/propel Svelte community!

# Are You Ready?
We use `pnpm`.

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

1. Documentation development
```bash
pnpm run dev:docs

# or start the server and open the app in a new browser tab
pnpm run dev:docs -- --open
```

2. Component development
```bash
pnpm run dev:sb
```

*Before you commit, make sure that `pnpm run check` to check your change with Svelte-Kit.

## Folder structure

`src`
 - `lib` - s-ui components 
 - 'routes` - documentation web application 
 - `stories` - the storybook examples for each s-ui component
