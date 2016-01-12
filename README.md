# react-redux-appstarter
#### Current version: 1.0.2

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

## App structure

```bash
├── initDevServer.js
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
│   │   └── Root.prod.jsx
│   ├── css
│   │   └── main.css
│   ├── index.js
│   ├── reducers.js
│   └── store
│       ├── configureStore.dev.js
│       ├── configureStore.js
│       └── configureStore.prod.js
├── webpack.config.dev.js
└── webpack.config.js


```

## License MIT
