# Simple-Angular2-Starter
Simple Angular 2 starter project with routing and material 2 based on the 5 min guide from angular.io

## Description
This is a really simple starter project based on the [5 MIN QUICKSTART](https://angular.io/docs/ts/latest/quickstart.html).
I have only made some slight adjustments to the base structure:
* Changed the TypeScript output directory to "dist"
* Moved Components to a separate folder
* Added routing
* Added [Material Design components for Angular 2](https://github.com/angular/material2)

## Installation
To use this starter run the install command to download the node modules and use the start command to run the lite server.

Install:
```
npm install
```
Start:
```
npm start
```

Should you get dependency errors with the icons module change the peerDependencie "@angular/http": "2.0.0-rc.0" in "node_modules/@angular-material/icon/package.json" to "@angular/http": "2.0.0-rc.1",
## Why This Starter
I have discovered that some starter projects out there are overloaded with a lot of stuff I don't need.
That is why I started with the bare minimum and changed some properties to my needs.
