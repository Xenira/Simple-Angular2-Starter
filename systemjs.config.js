(function (global) {


    // map tells the System loader where to look for things
    var map = {
        'app': 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        
        '@angular': 'node_modules/@angular',
        '@angular2-material': 'node_modules/@angular2-material',
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];

    var materialPackages = [
        '@angular2-material/core',
        '@angular2-material/button',
        '@angular2-material/card',
        '@angular2-material/checkbox',
        '@angular2-material/icon',
        '@angular2-material/input',
        '@angular2-material/list',
        '@angular2-material/progress-bar',
        '@angular2-material/progress-circle',
        '@angular2-material/radio',
        '@angular2-material/sidenav',
        '@angular2-material/toolbar',
    ]

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });
    
    materialPackages.forEach(function (pkgName) {
        packages[pkgName] = { format: 'cjs', main: pkgName.split("/")[1] + '.js', defaultExtension: 'js' }
    })

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);