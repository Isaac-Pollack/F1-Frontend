# ISAAC DOCUMENTATION

to document: Frontend does promises with proxy server, server uses get methods over Axios

Endpoints to talk about:
// <http://ergast.com/api/f1/current/driverStandings>
// <http://ergast.com/api/f1/current/constructorStandings>
// <http://ergast.com/api/f1/current/next>

Page with F1 standings, pulled from Ergast or similar
Next race 'widget' with weather API for that day
Facebook OAuth with another 'widget' section that lets you like social media pages for the teams/drivers - react has a package for the SDK?

CRA to handle the proxying using "proxy": "<https://localhost:3080>" in package.json and to click 'advanced' and 'Accept the risks and proceed'.

- husky makes it possible to use githooks as if they are npm scripts.
- lint-staged allows us to run scripts on staged files in git.
- prettier is the JavaScript formatter we will run before commits.

Now, whenever I make a commit, Prettier will format the changed files automatically. You can also run ./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}" to format your entire project for the first time.

## Solving the 6 Vulnerabilities in SVGR

Adding the following passage to force a higher lib version, even though it is a false positive. This allows us to see any other vuln's we might have, easier.

    "overrides": {
      "react-scripts": {
        "@svgr/webpack": "^6.5.1"
      }
    },

## ====== REACT SPECIFIC BELOW THIS POINT ======

## Available Scripts

In the project directory, you can run:

### `npm start`

MAKE SURE: The command is run while the folder name is in lower case. E.G VSCode automatically opens terminal in upper-case, this conflicts with CRA. Opening a CMD or Terminal and Changing Directory into it works fine, or doing `cd ..` and then `cd web-mashup` also works

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
