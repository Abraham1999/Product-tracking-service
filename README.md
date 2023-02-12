![react-redux-app-template](https://repository-images.githubusercontent.com/208453250/35dbd380-52a2-11ea-870e-335ecbd918d2)

## Table of contents

- [How to install](#howtoinstall)
- [Getting started](#gettingstarted)
- [Project structure](#structure)

<a name="howtoinstall"></a>

## How to install

This project is a start project built in ReactJs, MongoDb, NodeJs and Express.
You can use this project like template for building a CRUD web app.
Although this project acts as a package tracking web app, it can easily be refactored into any project required.
To begin using this template, you need clone this repository and go to the project folder.

```bash
git clone https://github.com/Abraham1999/Product-tracking-service.git ProjectName
cd ProjectName
```

Then you should install required dependencies in both the backend and client folder.

```bash
npm install
```

Then you need to create a .env file and add the following variables

```bash
mongoURI: your mongodb instance url
jwtSecret: add your secret
```

You can change the port for the server in the app.js file

<a name="gettingstarted"></a>

## Getting started

To launch the project you need to execute following command in the root folder:

```bash
npm run dev
```

Open in browser: [http://localhost:3000](http://localhost:3000) <br/>

<a name="structure"></a>

## Project structure

```
package-tracking-template/ (client)
|
├──public/                              // Directory for the build
|  ├──icons                             // Icons for the manifest.json and favicon
|  ├──favicon.ico
|  └──manifest.json                     // The web app manifest is a simple JSON file
|                                       // that tells the browser about your web application
|                                       // and how it should behave when 'installed'
|                                       // on the user's mobile device or desktop.
|
├──src/
|   |──redux                            // Redux actions and reducers
│   │   ├──[actions]
│   │   ├──[name]Actions.js
│   │   ├──...
│   │   └──types.js                     // Redux action type constants
|   |   |
│   │   ├──[reducers]
│   │   ├──[name]Reducers.js
│   │   ├──...
│   │   └──index.js                     // Redux reducer initialization
|   |   |
│   │   └──[store]
│   │
|   ├──components                       // Components that are reused
│   │   ├──[Name]
│   │   │   ├──[Name].js
│   │   └──...
│   │
|   ├──pages                            // Components that use redux connect (Containers)
│   │   ├──[Name]
│   │   │   └──[Name].jsx
│   │   └──...
│   │
|   ├──config.js                        // Constant config
|   ├──index.js                         // App entry
|   ├──App.css                          // App styles
|   ├──router.js                        // Router
|   └──store.js                         // createStore
|
└──*
```
