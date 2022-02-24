# spotify-next

spotify-next is a Web UI wrapper around Spotify which provides a few additional features like nested playlists, queueing multiple playlists at a time and blocked artists. Built with the following tools:

- Next.js
- React
- TypeScript
- Jest / Testing Library
- ESLint / Prettier

## Conventions

- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). A git commit prompt which enforces these conventions is available via [`npm run commit`](https://commitlint.js.org/#/).
- ESLint uses a custom config which slightly extends eslint-plugin-react. Formatting follows (mostly) Prettier's defaults.
- Husky ensures code is linted and formatted before commited.

## Scripts

Runs [`next dev`](https://nextjs.org/docs/api-reference/cli#development) which starts Next.js in development mode

```
npm run dev
```

Runs [`next build`](https://nextjs.org/docs/api-reference/cli#build) which builds the application for production usage

```
npm run build
```

Runs [`next start`](https://nextjs.org/docs/api-reference/cli#production) which starts a Next.js production server

```
npm run start
```

Runs [`tsc`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) which compiles typescript

```
npm run type-check
```

Runs [`eslint`](https://eslint.org/docs/user-guide/command-line-interface) using the rules in .eslintrc.json

```
npm run lint
```

Runs [`prettier`](https://prettier.io/docs/en/cli.html) which formats using the rules in .prettierrc

```
npm run format
```

Runs [`jest --updateSnapshot`](https://jestjs.io/docs/snapshot-testing) which creates new Jest snapshots

```
npm run test:update-snapshot
```

Runs [`jest`](https://jestjs.io/docs/cli) which runs all tests one time

```
npm run test
```

Runs [`jest --watch`](https://jestjs.io/docs/cli#--watch) which starts a test runner and runs tests only when their relevant files are changed

```
npm run test:watch
```

Lints, type checks and tests everything using the above scripts

```
npm run test:all
```
