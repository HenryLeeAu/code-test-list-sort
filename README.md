
## Intro

This project uses scss to update styles, I usually use css-in-js approach. mobile web css is not implemented yet.

## Description
- `StatusWrapper`
A reusable wrapper layer which handles the ui status of fetching data.

- `useService`
A customer hook function can return data from api along with the loading status. The place where we are using this hook, we only need to dump data into component. We don't need to rewrite loading and fetch logic again over again and it has the consistent behaviour.
## How to try this project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
I am using react testing library and jest for this project.

### `yarn analyze`

Open up bundle analyze page

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

