# Are You Ready?

We are going to use `npm` or `npm`.

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

1. Documentation development

```bash
npm run dev:doc
# OR
npm run dev:doc
```

2. SUI Component(Storybook) development

```bash
npm run dev:storybook
# OR
npm run dev:storybook
```

3. You can just run both(1 and 2) by execuing this.

```bash
npm run dev
# OR
npm run dev
```

\*Before you commit, make sure that `npm run check` to check your change with Svelte-Kit.

## Commit

<p>When we make a commit, we shall use <a href="https://www.conventionalcommits.org/en/v1.0.0/">conventional commits</a>.</p>

```sh
feat: introduce a new component/feature for a component
fix: fix a bug of component
chore: some clean-ups
docs: add/fix the documentation
test: add/fix test
```

\*We will recommend you to not make a huge code amount commit... (It's going to be hard to review...)

## Testing

<p>Before submitting a PR, please run a test:</p>

```sh
npm run test
```
