
This is going to be a Svelte UI library that anyone can contribute and improve/propel Svelte community!

# Are You Ready?
We use `pnpm`.

# TODO
- Create a Figma design for the components.
- Tailwind integration.
- Migrate the components from React one to here.
- Create a unit test cases. 
- Create a integration test cases.
- Create a documentation website (`src/routes` folder)
- First release!


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

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build(documentation) with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
