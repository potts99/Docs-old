---
id: gulp
title: Using Gulp.js to automate
---
# Why does this help

This ables you to split your code up and organise in sass and automatically compile it to css. 

On top of that is minifies your css if you are hosting it on a server to increase speeds and loading times

# Installation

Needs nodeJS to work as it uses npm install

``` npm install gulp-cli -g ``` 
``` npm install gulp -D ```
``` touch gulpfile.js ```
``` gulp --help ```

# Project set up

Create a folder

Run npm init to create a package.json

Install gulp as a dependency to the project ``` npm isntall gulp -D ```

use the command ``` touch gulpfile.js ``` // creates a file in the project folder 

use npm ``` npm install --save gulp-sass``` // This converts your sass to css

use npm ``` npm install --save gulp-uglifycss ```

# Gulp commands

Use ```gulp sass``` in the command line to convert sass to css

use ``` gulp css``` in the command line to minify your css into one line of code.

## Example 

The following example shows how you can mininify your sass files, in order to reduce the size. 
By reducing the size of your css / sass file, it also reduces server load times.

```
const gulp = require('gulp');

// convert sass to a css file 
const sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss') // Wildcald to compile the whole folder
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Minimise your css files
const uglifycss = require('gulp-uglifycss');
 
gulp.task('css', function () {
  gulp.src('./styles/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80, // After every * characters add a new line
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

// automatic chnages and builds in gulp

gulp.task('run', ['sass', 'css']);

// automatically watches for changes in these folders 
gulp.task('watch', function() {
    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./css/*.css', ['css']);
});

// default task to automatically build after changes made to files

gulp.task('default', ['run', 'watch']);
```