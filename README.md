# Multiplayer Tic Tac Toe

## Table of Contents

- Running the Building
- Building
- Editing

## Running the Build

1. If there is a `build` folder:
    1. Navigate to the `build` folder and run `npm install` to install the
    dependencies;
    2. Run `npm start` to start the server
    3. You should be able to see the address at which the web app is hosting
    inside your terminal.
    
2. If the `build` folder is not visible:
    1. Follow the instruction in

## Building

1. Navigate to `./server` folder and run `npm install`;
2. Navigate to `./client` folder and run `npm install`;
3. Navigate to `./scripts` folder;
4. Run `build.js` to build the entire project:
    * Run `build-server.js` to build the server;
    * Run `build-client.js` to build the web client;
5. A folder named `build` should appear at the root of the project, containing both scripts for the server
and the client.

## Editing

* The `server` and and the `client` are separate components of the game. Before editing either
of them, make sure to run `npm install` to install the necessary dependencies;
* The `shared/interfaces` folder contains the **Typescript definition** files for the interfaces
shared between the `server` and the `client.`
* The `scripts` folder contains the scripts used to compile the client and the server
into production builds.

### Editors

* **VS Code**: you do not have to do anything to edit the project in vs code, as Typescript is
supported out of the box by VS Code;

* **Atom**: install the package `atom-typescript` to enable autocomplete and syntax
highlighting for typescript and typescript react, and `autocomplete-path` to enable import
path completion; I also recommends the package `auto-detect-indentation` your editor can indent
lines correctly as your press enter.

### Indentation

* All files ends with `.js` and `.ts` have **four spaces** for indent width;
* All files ends with `.jsx` and `.tsx` have **two spaces** for indent width;
