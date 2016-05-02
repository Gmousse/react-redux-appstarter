# react-redux-appstarter
#### Current version: 1.1.0

A starter pack to develop a react + redux + webpack application.

Here I provide a global react.js app structure with a complete package.json and webpack configuration files.
In addition, you will find configured redux tools development.

This repository was inspired by [react-webpack-boilerplate](https://github.com/public-idees/react-webpack-boilerplate) and [react-devtools](https://github.com/gaearon/redux-devtools);

## Installation

- Install git
- Clone the repo ```git clone https://github.com/Gmousse/react-redux-appstarter.git```
- Install node.js and npm v3+
- Install node dependencies: ```npm install``` or ```npm i```

## Customize your own application

- Delete .git and initiate your own.
- Rename your app folder.
- Change your personal informations inside package.json.

## Usage for development

- Launch the devServer, redux-devtools and hot reloading: ```npm run dev```
- See the result on localhost:3000

## Usage for production

- Launch the webpack compilation which creates a minify bundle.js and index.css: ```npm run prod```
- Get the result inside public/

## Use routes from react-router

- Configure your own routes in /src/containers/Router.jsx

## Use tests with tape

- Write your tests in tests/ with the suffix '-tests.js'
- Launch your tests by running : ```npm test```

## Use storybook

- Launch your stories by using: ```npm run storybook```

## App structure

```bash
.
├── initDevServer.js
├── lib
│   ├── actions.js
│   ├── components
│   │   └── YourComponent.js
│   ├── containers
│   │   ├── App.js
│   │   ├── DevTools.js
│   │   ├── Root.dev.js
│   │   ├── Root.js
│   │   ├── Root.prod.js
│   │   └── Router.js
│   ├── index.js
│   ├── reducers.js
│   └── store
│       ├── configureStore.dev.js
│       ├── configureStore.js
│       └── configureStore.prod.js
├── LICENSE
├── package.json
├── public
│   └── index.html
├── README.md
├── src
│   ├── actions.js
│   ├── components
│   │   └── YourComponent.jsx
│   ├── containers
│   │   ├── App.jsx
│   │   ├── DevTools.jsx
│   │   ├── Root.dev.jsx
│   │   ├── Root.js
│   │   ├── Root.prod.jsx
│   │   └── Router.jsx
│   ├── css
│   │   └── main.css
│   ├── index.js
│   ├── reducers.js
│   └── store
│       ├── configureStore.dev.js
│       ├── configureStore.js
│       └── configureStore.prod.js
├── tests
│   └── components
│       └── YourComponent-test.js
├── webpack.config.dev.js
└── webpack.config.js

12 directories, 35 files


```

## License MIT
