# Vue 3 Examples
This was originally a project I started on CodeSandbox to learn various quirks in Vue that were different to React.  
Slowly it evolved more and more complex examples until what you see here today.

## Commands
To run a particular command, simply prefix with `yarn`. Eg `yarn dev`.

| Command                 | Result                                                                                          |
|:------------------------|-------------------------------------------------------------------------------------------------|
| `dev`                   | Serves this FE application in dev mode.                                                         |
| `eslint-fix`            | Lints the project, all `.vue` and `.js` files. Will apply auto-fix.                             |
| `build`                 | Builds the UI project.                                                                          |
| `preview`               | Builds the UI project and serves it locally.                                                    |
| `test:unit`             | Executes a once off run of the tests with coverage. Saves reports to `/test-reports` directory. |
| `test:unit:html-report` | Executes the once off tests with coverage and serves the report locally.                        |
| `test:e2e`              | Executes end-to-end tests with Playwright                                                       |
| `test:e2e:ui`           | Executes end-to-end tests with Playwright but in a visible UI                                   |
| `storybook`             | Run storybook locally                                                                           |
| `build-storybook`       | Build storybook for deployment                                                                  | 

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

| Dependency Name               | Description                                             | Type |
|:------------------------------|:--------------------------------------------------------|:-----|
| @auth0/auth0-vue              | Auth0 library for Vue                                   | App  |
| @floating-ui/vue              | Library for building popper elements in the browser     | App  |
| @storybook/addon-actions      | Actions addon for Storybook                             | App  |
| @vee-validate/rules           | Extra rules for Vee-validate the validation library     | App  |
| axios                         | Industry standard library used to make requests         | App  |
| case                          | Library for converting strings to different cases       | App  |
| date-fns                      | Very common library for manipulating dates              | App  |
| date-fns-tz                   | Library for manipulating dates with timezones           | App  |
| humanize-duration             | Library to format duration into human readable format   | App  |
| lodash                        | Useful functions                                        | App  |
| pinia                         | State management for Vue                                | App  |
| qs                            | Library used to build query-strings                     | App  |
| rxjs                          | Functional programming reactive library                 | App  |
| vee-validate                  | Form validation library                                 | App  |
| vue                           | Vue, of course                                          | App  |
| vue-router                    | Router for Vue                                          | App  |
| vue-types                     | Simplified type checking for props in Vue               | App  |
| yup                           | Object validation library for form/field validation     | App  |
| zod                           | Object validation library                               | App  |
| @chromatic-com/storybook      | Chromatic plugin for Storybook                          | Dev  |
| @playwright/test              | E2E Testing library                                     | Dev  |
| @storybook/addon-essentials   | Storybook essential addons                              | Dev  |
| @storybook/addon-interactions | Storybook interactions addon                            | Dev  |
| @storybook/addon-onboarding   | Storybook onboarding addon                              | Dev  |
| @storybook/blocks             | Storybook blocks                                        | Dev  |
| @storybook/test               | Storybook testing plugin                                | Dev  |
| @storybook/vue3               | Storybook vue plugin                                    | Dev  |
| @storybook/vue3-vite          | Storybook vue-vite plugin                               | Dev  |
| @stylistic/eslint-plugin      | Plugin for ESLint for code styling standards            | Dev  |
| @types/node                   | Typescript Definitions for Node. Came with Playwright   | Dev  |
| @vitejs/plugin-vue            | Plugin for Vite to allow builds for Vue                 | Dev  |
| @vitest/coverage-istanbul     | Vitest plugin for Istanbul                              | Dev  |
| @vitest/ui                    | Vitest plugin for generating HTML test reports          | Dev  |
| eslint                        | ESLint, of course                                       | Dev  |
| eslint-plugin-storybook       | ESLint plugin for storybook                             | Dev  |
| eslint-plugin-vue             | Plugin for ESLint for Vue                               | Dev  |
| storybook                     | Storybook                                               | Dev  | 
| vite                          | Vite that is used to serve and build our FE application | Dev  |
| vitest                        | Testing Library for Vite Projects                       | Dev  |

## Tests
There are two testing libraries, Playwright and Vitest. Playwright is for UI E2E tests. They run UI level testing.
Vitest is purely for unit level testing.

All tests are stored in the `/tests` folder. They are split accordingly into their `/tests/e2e` and `/tests/unit`
counterparts with test reports for each type of testing beneath those. In the Commands section you can see the
relevant commands to run tests for each.

## Deployment
The FE application is built and deployed through GitHub Actions on to AWS S3 bucket. It has public static website 
hosting. You can find the URL to the static website by going to the S3 bucket properties and finding the Static Hosting
section.
