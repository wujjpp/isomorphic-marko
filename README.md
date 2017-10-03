# Marko Starter Kit

Marko Starter Kit is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/) and
[Marko 4](http://markojs.com/), containing modern web development
tools such as [Webpack 3](http://webpack.github.io/), [Babel 6](https://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). Helping you to stay productive
following the best practices. A solid starting point for both professionals
and newcomers to the industry.

[![Build Status](https://travis-ci.org/wujjpp/isomorphic-marko.svg?branch=master)](https://travis-ci.org/wujjpp/isomorphic-marko)

## Features
- [Marko 4](http://markojs.com/)
- [Webpack 3](https://webpack.js.org/)
- [Babel 6](https://babeljs.io/)
- Support client live reload
- Supports server auto compile and restart
- Support [less](http://lesscss.org/), [sass](https://sass-lang.com/)

## How to Install
```shell
$ git clone https://github.com/wujjpp/marko-starter-kit.git
$ cd marko-starter-kit
$ npm install
```

## How to Run and Build
#### Run
```shell
$ npm start
 ```

#### Build
```shell
$ npm run build
```

#### Run in dist
```shell
$ npm run start:dist
```

#### About CDN
Sometimes, we should host our static files(js,css,image and etc) in CDN, for this case you should change seetings in  `/cdn_config.js`,
for example: if our CDN root is `http://cache.mycdn.com/`, change `//cache.YourCDN.com` to `//cache.mycdn.com`

__/cdn_settings.js__
```javascript
export default {
  dev: {
    publicPath: '/'
  },

  sit: {
    publicPath: '//sitcache.mycdn.com/'
  },

  uat: {
    publicPath: '//uatcache.mycdn.com/'
  },

  prod: {
    publicPath: '//cache.mycdn.com/'
  }
}

```
then use the following command for building, after built, upload the `/build/public` folder to CDN,  thats all.
```shell
$ npm run build -- prod
```
NOTE: double dashes are required and there is a `blank` between `--` and `prod`

## Regist client entry in entry-settings.js
**IMPORTANT** : The client entry registering file, you should register all client entries in this file for compiler, for improving build performance, you can disable any client entry built by set it's `include` attribute to `false`

___/entry-settings.js___
```javascript
export default {
  // Home page
  home: {
    src: './src/routes/home/client.js',
    include: true
  },

  // Test page
  test: {
    src: './src/routes/test/client.js',
    include: false
  }
}
```
NOTE: The above settings command build system that "Compile the `./src/routes/home/client.js` to `home[-xxxxxxxx].js` and dont compile `./src/routes/test/client.js` during developing". anyway, all entries will be compiled in `build` mode

## About complie enviroment
We defined 2 parameters for identity complie enviroment

___/tools/webpack/client.build.js___
```javascript
...
plugins: [
  new webpack.DefinePlugin({
    '__BROWSER__': true,
    '__DEV__': false
  }),
  ...
]  
...
```
You can use this 2 options in your code for condition compiling,

For example: In `/src/routes/test/app-main/component.js`, we use `__BROWSER__` to tell compiler `jquery.easypiechart` and `toastr` only built for BROWSER, actually it is useless and cannot be used in node enviroment.
```javascript
if (__BROWSER__) {
  require('easy-pie-chart/dist/jquery.easypiechart')
  require('toastr/toastr.scss')
  var toastr = require('toastr')
}

export default class Test {
  onMount() {
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
```

## Analyse webpack stats
We have integrated tools for analysing bundled file, after run `npm run build`, try to type the following command in your terminal.

```shell
$ npm run analyse:client
```

```shell
$ npm run analyse:server
```

```shell
$ npm run analyse
```

## About Browsersync
Navigate to [http://localhost:3001](http://localhost:3001) to open Browsersync control panel

## Directory Layout
```
.
├── /public/                     # Static files which are copied into the /build/public folder
├── /src/                        # The source code of the application
│   ├── /components/             # Top level marko components
│   ├── /core/                   # Core module or utility library
│   ├── /layouts/                # Layout marko
│   ├── /routes/                 # Routes or pages
│   │   ├── /home/               # Example home page
│   │   │   ├── /components      # Page level compoment
│   │   │   ├── /images          # Page level images
│   │   │   ├── client.js        # Entry of client script
│   │   │   ├── index.js         # Router for server side
│   │   │   └── layout.marko     # Page template marko
│   │   └── /xxxx/               # xxxx page    
│   ├── /styles/                 # Global stylesheets
│   ├── /vendor/                 # Customised third-party library
│   ├── /assets-loader.js        # Loader for loading assets.json
│   └── /server.js               # Express server app
├── /tests/                      # Unit and end-to-end tests
├── /tools/                      # Build automation scripts and utilities
│   ├── /analyse/                # analyse tools for webpack stats
│   ├── /libs/                   # Library for build system
│   ├── /loaders/                # Custom webpack loader
│   ├── /plugins/                # Custom webpack plugin
│   ├── /webpack/                # Webpack config files
│   ├── /build-client.js         # Scripts for build client app
│   ├── /build-server.js         # Scripts for build server app
│   ├── /build.js                # Scripts for build client and server
│   ├── /clean.js                # Cleans up for the output (build) folder
│   ├── /config.js               # Build config file
│   ├── /copy.js                 # Copy package.json, public folder and assets.json
│   ├── /post.config.js          # Configuration for transforming styles with PostCSS
│   ├── /run.js                  # Helper function for running build automation tasks
│   ├── /start.js                # Launches the development web server with "live reload"
│   └── /watch.js                # watch public folder, if changed copy files to dist/public folder
└── package.json                 # The list of 3rd party libraries and utilities
└── entry-settings.js            # Configure client entry for built
```

## How to Update
```shell
$ git checkout master
$ git pull origin master
$ npm install
```

Made with ♥ by Wu Jian Ping
