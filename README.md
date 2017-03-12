# PollshareMarket

Setting up project

#Prerequisites

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.

#Installation
1. Make sure you have npm installed. (https://nodejs.org/en/download/)
2. Install Angular CLI globally `npm install -g @angular/cli`
3. git clone this repository `git clone link to repository`. cd into folder 'cd path_to_base_of_this_folder'
4. Run `npm install` to install node modules required by this project.
5. Install bower `npm install bower -g`
6. Run bower install  to install bower components needed by this project.
--PROJECT SETUP SUCCESSFUL---
7. Within project folder run `ng serve` or `npm start` to start local built in server
8. Navigate to localhost:4200/. If you see an app framework, it worked. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Styling HTML pages
By Default, this project uses scss files.

## Add new node packages
`npm install package_name`
import name_of_package || import component from name_of_package in your app.component.ts
You can also include js or scss/css files using angular-cli.json under the scripts property (`for js`) or the styles property for css/scss
You will have to stop and restart the local server in order for changes to show up.

## Bower components.
`bower install name_of_package --save`
Include js or scss/css files using angular-cli.json under the scripts property (`for js`) or the styles property for css/scss
You will have to stop and restart the local server in order for changes to show up.

