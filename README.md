# Readr UI
A monorepo for READr UI Vue.js Componets.

## Workflow dependencies
* [Lerna](https://github.com/lerna/lerna) for managing monorepo workflow.
* [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup) for scaffolds a minimal setup for Vue Single File Component (SFC).
* [Storybook](https://storybook.js.org/) with development environment for UI components.

## Utilities dependencies
* [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) for running linters on git staged files.
* [@vue/cli-service](https://www.npmjs.com/package/@vue/cli-service) as a linter.
* [@vue/cli-service-global](https://www.npmjs.com/package/@vue/cli-service-global) for rapid prototyping a single Vue.js SFC.
* [commitlint](https://github.com/conventional-changelog/commitlint) and [commitizen](https://github.com/commitizen/cz-cli) for conventional commits.

## Dependency management
Use `yarn` instead of `npm`, since we take advantage of [Yarn Workspaces](https://github.com/lerna/lerna/blob/master/commands/bootstrap/README.md#--use-workspaces) to [increase the bootstrap performance](https://github.com/lerna/lerna/blob/master/FAQ.md#the-bootstrap-process-is-really-slow-what-can-i-do).
For more information about Lerna + Yarn Workspaces, check this [article](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/).

## Scripts
### Bootstrapping
```
# Install dependencies
yarn install

# Link local packages together and install remaining package dependencies
# https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme
# you can omit npx if you had installed lerna globally.
npx lerna bootstrap
```

### Developing
```
# Scaffolds a minimal setup for Vue Single File Component (SFC)
yarn sfc-init
```
#### Caveats
* Naming
    * Package's name is scoped with `@readr-ui`, for example: `@readr-ui/new-component`.
    * Folder's name pattern of packages is: `/packages/readr-ui-*/`.
    * Entry SFC name pattern is: `readr-ui-*.vue`.
* Workflow
    * Choose "Single Component mode" after `yarn sfc-init`.
    * Remember to add `"publishConfig": { "access": "public" }` to scoped package's `package.json`.
    * Modify the version in scoped package's `package.json` below to `1.0.0`, for better developing experence with `lerna publish`, since lerna will always bump the version when publishing.

```
# For rapid prototyping a single Vue.js SFC
yarn serve packages/readr-ui-*/src/readr-ui-*.vue
```

```
# Start the storybook at localhost:6006
yarn storybook
```
### Add packages
```
# Install package-1 to package-2
npx lerna add package-1 --scope=package-2
```
* For more information about `lerna add`, check the [doc](https://github.com/lerna/lerna/tree/master/commands/add#readme).
* You could add local or remote package as dependency to packages in the current Lerna repo.
    * Example of add remote package: `lerna add babel --scope=@readr-ui/app-header`.
    * Example of add local package: `lerna add @readr-ui/logo --scope=@readr-ui/app-header`.

### Linting
```
# Lint all the .js and .vue files in the codebase
yarn lintall

# Fix all the lint errors and warnings
yarn lintfix
```

### Publishing to npm
```
# Publish packages in the current project
npx lerna publish
```
#### Caveats
* DO NOT PUSH COMMITS MANUALLY after commit your changes, let `lerna publish` do this job.
    * `lerna publish` will calling `lerna version` behind the scenes, for more information, check the [doc](https://github.com/lerna/lerna/tree/master/commands/version#usage).