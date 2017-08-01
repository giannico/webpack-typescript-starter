# webpack-typescript-starter

A simple webpack/TypeScript starter project.

This is a very basic project that allows you to get up and running easily with webpack and TypeScript.

-----

### Features

* TypeScript 2/webpack 3 support
* Simple, modular webpack configuration
* Watch Mode
* Minimal dependencies (no external build system or npm globals required)
* Works on OSX and Windows

-----

### Quick Start

```sh
# clone the report
git clone https://github.com/giannico/webpack-typescript-starter

# change directory to the app
cd webpack-typescript-starter

# install the dependencies
npm install

# start development mode
npm run dev
```

#### Dev Configuration

When running in dev mode, the application will automatically execute each time you make a change to `src/index.ts` or any file that `src/index.ts` depends on (recursively).

-----

### Other NPM scripts

After running `npm install` once, you can:

#### Build the app (productionized version)

```sh
npm run build
```

#### Run the app once

```sh
npm start
```

#### Run the linter

Tailor the `tslint.json` file to your preferences

```sh
npm run lint
```