# F1 Frontend

To test/run the application you will need to have start both the Proxy Server (API) and the Frontend for things to work.

## How To

Run the following two commands over two instances of your local console/terminal, inside BOTH the `F1-Frontend` folder & `F1-Frontend\proxy_server`

### `npm install`

To install dependencies

### `npm start`

MAKE SURE: The command is run while the folder name is in lower case. E.G VSCode automatically opens terminal in upper-case, this conflicts with CRA. Opening a CMD or Terminal and Changing Directory into it works fine, or doing `cd ..` and then `cd F1-Frontend` also works

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Information

### Frontend Setup

The frontend of this project utilizes promises with a proxy server, employing Axios for making GET requests. The proxy server configuration is handled by Create React App (CRA) through the "proxy" field in the `package.json` file. Make sure to set it as follows:

```json
"proxy": "https://localhost:3080"
```

## Page Features

1. **F1 Standings Component**
   - Display Formula 1 driver & constructor standings fetched from Ergast via Proxy API.

2. **Next Race Component**
   - Utilizes a weather API to provide information about the weather on the day of the next race. (Limited to the day off as it is free, intended to make this future forecast but that costs $$$)

## API

| Endpoint          | Description                                                                                                                                                                                     |
| ------------------| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/api/standings`  | Retrieves current driver and constructor standings data from external APIs and combines them into a single response. Uses `axios` for asynchronous HTTP requests to the external APIs. Processes and combines data, sending a JSON response. If an error occurs, it sends an error response.  |
| `/api/race`        | Retrieves data for the next Formula One race, including race details and current weather. Uses `axios` to fetch data from external APIs. Extracts latitude and longitude from race data and retrieves current weather using the WeatherAPI. Creates a modified response object with race and weather details. Sends a JSON response. If an error occurs, it sends an error response.  |

## Development Tools

### 1. Husky

Husky enables the use of Git hooks as if they are npm scripts. This ensures consistent code quality and behavior throughout the development process.

### 2. lint-staged

lint-staged allows running scripts on staged files in Git. It ensures that only the relevant files are checked before committing changes.

### 3. Prettier

Prettier is the JavaScript formatter used in this project. It automatically formats changed files upon committing. To format the entire project for the first time, run:

```bash
./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
```

## ====== REACT SPECIFIC BELOW THIS POINT ======

## Solving the Vulnerabilities in React-Scripts/SVGR/PostCSS

Adding the following passage to force a higher lib version, even though it is a false positive. This allows us to see any other vuln's we might have, easier. Additionally, there is no SSL certificate so you will need to click 'advanced' and 'Accept the risks and proceed' to handle proxying/viewing the webpage in development mode.

```json
    "overrides": {
      "react-scripts": {
        "@svgr/webpack": "^6.5.1"
        "postcss": "^8.2.10"
      }
    },
```

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
