// <=================================================>
// IMPORTS
import gulp from "gulp";
import gulpif from "gulp-if";
import kit from "gulp-kit-2";
import plumber from "gulp-plumber";
import htmlmin from "gulp-htmlmin";
import useref from "gulp-useref";
import webp_HTML from "gulp-webp-for-html";
import typograf from "gulp-typograf"
import config from "../config";
// <=================================================>

// <=================================================>
// BUILD FILES
export const viewsBuild = () =>
  gulp
    .src(`${config.src.kit}/*.kit`)
    .pipe(plumber())
    .pipe(kit())
    .pipe(typograf({
      locale: ['ru', 'en-US']
    }))
    .pipe(gulpif(config.isProd, webp_HTML()))
    .pipe(useref())
    .pipe(gulpif(config.isProd, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(config.dest.html));
// <=================================================>

// <=================================================>
// WATCH FILES
export const viewsWatch = () => {
  gulp.watch(`${config.watch.kit}/**/*.kit`, viewsBuild);
  gulp.watch(`${config.watch.kitBEM}/**/*.kit`, viewsBuild);
};
// <=================================================>
