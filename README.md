# Marko Starter Kit

Marko Starter Kit is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/) and
[Marko 4](http://markojs.com/), containing modern web development
tools such as [Webpack 2](http://webpack.github.io/), [Babel 6](https://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). Helping you to stay productive
following the best practices. A solid starting point for both professionals
and newcomers to the industry.

## Features
- [Marko 4](http://markojs.com/)
- [Webpack 2](https://webpack.js.org/)
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
### Run
```shell
$ npm start
 ```

### Build
```shell
$ npm run build
```

### Run in dist
```shell
$ npm run start:dist
```

### About CDN
Sometimes, we should host our static files(js,css,image and etc), in this case you should edit `/tools/config.js`,
for example: if our cdn root is `http://cache.mycdn.com/`, change `//cache.YourCDN.com` to `//cache.mycdn.com`

__/tools/config.js__
```
const shared = {
  dist: 'build',
  frontPort: 3000, //front-end port
  backendPort: 9000 //backend-server port
};

const config = {
  dev: {
    publicPath: 'http://localhost:' + shared.frontPort + '/'
  },

  prod: {
    publicPath: '//cache.YourCDN.com/' //For CDN root url goes here, change the url to you CDN root
  }
};

export default Object.assign({}, shared, config)
```
then use the following command for building, after built, upload the `/build/public` folder to CDN,  thats all.
```shell
$ npm run build -- prod
```
NOTE: double dashes are required and there is a `blank` between `--` and `prod`

## Regist client entry in entry-settings.js
**IMPORTANT** : The client entry registering file, you should register all client entries in this file for compiler, for improving build performance, you can disable any client entry built by set it's `include` atribute to false

___entry-settings.js___
```
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
NOTE: The above settings command build system that "Compile the `./src/routes/home/client.js` to `home[-xxxxxxxx].js`, and dont compile `./src/routes/test/client.js` in development", anyway, all files will be compiled in `build` mode

## Analyse webpack stats
After built, run the following command to launch "Analyse web", then choose the stats that you want to analysis
```shell
$ npm run analyse
```

## Directory Layout
```
.
├── /public/                     # Static files which are copied into the /build/public folder
├── /src/                        # The source code of the application
│   ├── /components/             # top level marko components
│   ├── /layouts/                # layout marko
│   ├── /routes/                 # routes or pages
│   │   ├── /home/               # page
│   │   │   ├── /components      # page level compoment
│   │   │   ├── /images          # page level images
│   │   │   ├── client.js        # entry of client script
│   │   │   ├── index.js         # router for server side
│   │   │   └── layout.marko     # page template marko
│   │   └── /xxxx/               # xxxx page    
│   └── /styles/                 # global stylesheets
├── /tests/                      # Unit and end-to-end tests
├── /tools/                      # Build automation scripts and utilities
│   ├── /libs/                   # Library for build system
│   ├── /loaders/                # Custom webpack loader
│   ├── /plugins/                # Custom webpack plugin
│   ├── /webpack/                # webpack config files
│   ├── /build-client.js         # Scripts for build client app
│   ├── /build-server.js         # Scripts for build server app
│   ├── /build.js                # Scripts for build client and server
│   ├── /clean.js                # Cleans up for the output (build) folder
│   ├── /config.js               # Build config file
│   ├── /post.config.js          # Configuration for transforming styles with PostCSS plugins
│   ├── /run.js                  # Helper function for running build automation tasks
│   └── /start.js                # Launches the development web server with "live reload"
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
