# Prerequisites

Make sure that you have `Node.js`(above `version 18`) installed along with your pacakge manager(i.e. `npm`, `yarn` or `pnpm`) ready on your local environment. (You can download Node.js from [here](https://nodejs.org/en))

## Development

Once you've created a project and installed dependencies with `npm install`, start a development server:

1. Documentation development

```bash
# npm
npm run dev:doc
# yarn
yarn run dev:doc
# pnpm
pnpm run dev:doc
```

2. SUI Component(Storybook) development

```bash
# npm
npm run dev:storybook
# yarn
yarn run dev:storybook
# pnpm
pnpm run dev:storybook
```

3. You can just run both(Doc and Storybook) by execuing this.

```bash
# npm
npm run dev
# yarn
yarn run dev
# pnpm
pnpm run dev
```

## Commit Convensions

<p>When we make a commit, we shall use <a href="https://www.conventionalcommits.org/en/v1.0.0/">conventional commits</a>.</p>

```sh
feat: introduce a new component/feature for a component
fix: fix a bug of component
chore: some clean-ups
docs: add/fix the documentation
test: add/fix test
```

\*We recommend you to not make a huge code amount commit. (It's going to be hard to review.)

## Pull Requests

We have a template for the PR. I recommend that you fill in that with your own words.
It's okay to leave empty(remove all text), CodeRabbit generate the Code change summary for you.

## Unit Testings

<p>If you would like to develop Unit test specifically, you can run:</p>

```sh
# npm
npm run test

# If you would like to test specific component's unit tests...
npm run test -- "path to your component test file"
```
