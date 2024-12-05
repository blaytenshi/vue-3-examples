# Vue 3 Examples
This was originally a project I started on CodeSandbox to learn various quirks in Vue that were different to React.  
Slowly it evolved more and more complex examples until what you see here today.

## Scripts
`dev` - Serves this FE application in dev mode.  
`eslint-fix` - Lints the project, all `.vue` and `.js` files. Will apply auto-fix.  
`build` - Builds the UI project.  
`preview` - Builds the UI project and serves it locally.  
`test:unit` - Executes a once off run of the tests with coverage. Saves reports to `/test-reports` directory.  
`test:unit:html-report` - Executes the once off tests with coverage and serves the report locally.  
`test:e2e` - Executes end-to-end tests with Playwright  
`test:e2e:ui` - Executes end-to-end tests with Playwright but in a visible UI  

## Node Version
There is a minimum version of Node needed for development. Currently, the minimum version is: `21.1.0`

## Dependencies
### Installing Dependencies
As you might notice from the `yarn.lock` we are using Yarn. We are using regular Yarn (not berry where special
forms of dependency caching is done). So installation is fairly standard with `yarn install`.

The tool will only compare to the highest major version in your `package.json`. If you know there is a newer
major version, use `yarn outdated` to see if there's a newer major version to update to. If there is, you will
need to use `yarn add [outdated-package-name]` for force an upgrade. Be ready to fix any breaking changes.

### Updating Dependencies
Upgrade is easy. `yarn upgrade-interactive` is the command to run. It shows you what is outdated and gives you
the options to update whichever. Use `ctrl-c` to exit if you're not upgrading anything.

### Dependency Manifest
Below is a list of dependencies of the project.

| Dependency Name           | Description                                             | Type |
|:--------------------------|:--------------------------------------------------------|:-----|
| axios                     | Industry standard library used to make requests         | App  |
| date-fns                  | Very common library for manipulating dates              | App  |
| humanize-duration         | Library to format duration into human readable format   | App  |
| lodash                    | Useful functions                                        | App  |
| pinia                     | State management for Vue                                | App  |
| qs                        | Library used to build query-strings                     | App  |
| rxjs                      | Functional programming reactive library                 | App  |
| vue                       | Vue, of course                                          | App  |
| vue-router                | Router for Vue                                          | App  |
| vue-types                 | Simplified type checking for props in Vue               | App  |
| zod                       | Object validation library                               | App  |
| @playwright/test          | E2E Testing library                                     | Dev  |
| @stylistic/eslint-plugin  | Plugin for ESLint for code styling standards            | Dev  |
| @types/node               | Typescript Definitions for Node. Came with Playwright   | Dev  |
| @vitejs/plugin-vue        | Plugin for Vite to allow builds for Vue                 | Dev  |
| @vitest/coverage-istanbul | Vitest plugin for Istanbul                              | Dev  |
| @vitest/ui                | Vitest plugin for generating HTML test reports          | Dev  |
| eslint                    | ESLint, of course                                       | Dev  |
| eslint-plugin-vue         | Plugin for ESLint for Vue                               | Dev  |
| vite                      | Vite that is used to serve and build our FE application | Dev  |
| vitest                    | Testing Library for Vite Projects                       | Dev  |

