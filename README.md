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
- [Marko](http://markojs.com/)
- [Webpack2](https://webpack.js.org/)
- [Babel 6](https://babeljs.io/) from the browser
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
Run
```shell
$ npm start
 ```

Build - the build results located at "publish" forlder
```shell
$ npm run build
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
│   ├── /lib/                    # Library for build system
│   ├── /loaders/                # Custom webpack loader
│   ├── /plugins/                # Custom webpack plugin
│   ├── /webpack/                # webpack config files
│   ├── /build-client.js         # Scripts for build client app
│   ├── /build-server.js         # Scripts for build server app
│   ├── /build.js                # Scripts for build client and server
│   ├── /clean.js                # Cleans up for the output (build) folder
│   ├── /post.config.js          # Configuration for transforming styles with PostCSS plugins
│   ├── /run.js                  # Helper function for running build automation tasks
│   └── /start.js                # Launches the development web server with "live reload"
└── package.json                 # The list of 3rd party libraries and utilities
```

## How to Update
```shell
$ git checkout master
$ git pull origin master
$ npm install
```



Made with ♥ by Wu Jian Ping
