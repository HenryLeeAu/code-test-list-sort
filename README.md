
## Intro

This project only include functionalities implementation and test cases without any css style.
I usually use css-in-js approach to add css style.

## Architecture
- `StatusWrapper`
A reusable wrapper layer which handles the ui status for each loading status.

- `getCurrentWeather`
An importable service, if we change the implementation (for example replace axios with another library), component and its testing does not required future change. Also handle an customised error so UI only needs to know rendering a error string, instead of inconsistent response from 3rd party api or network error.

- `config`
A central file will contain all the keys and endpoints for the future

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

