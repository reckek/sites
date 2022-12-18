// <=================================================>
// IMPORTS
import gulp from "gulp";
const sass = require("gulp-sass")(require("sass"));
import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import autoprefixer from "gulp-autoprefixer";
import groupMedia from "gulp-group-css-media-queries";
import mincss from "gulp-clean-css";
import webp_CSS from "gulp-webp-css-splitter";
import gulpif from "gulp-if";
import debug from "gulp-debug";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import config from "../config";
// <=================================================>

// <=================================================>
// BUILD FILES
export const sassBuild = () =>
  gulp
    .src(`${config.src.sass}/main.scss`)
    .pipe(plumber())
    .pipe(gulpif(config.isDev, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(config.isProd, groupMedia()))
    // .pipe(gulpif(config.isProd, webp_CSS()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(rename({ basename: "style" }))
    .pipe(gulpif(config.isDev, sourcemaps.write()))
    .pipe(gulp.dest(config.dest.css))
    .pipe(
      gulpif(
        config.isProd,
        mincss({
          compatibility: "ie9",

          level: {
            1: {
              specialComments: 0,
              removeEmpty: true,
              removeWhitespace: true,
            },
            2: {
              mergeMedia: true,
              removeEmpty: true,
              removeDuplicateFontRules: true,
              removeDuplicateMediaBlocks: true,
              removeDuplicateRules: true,
              removeUnusedAtRules: false,
            },
          },
        })
      )
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(config.dest.css))
    .pipe(
      debug({
        title: "CSS files: ",
      })
    )
    .on("end", browsersync.reload);
// <=================================================>

// <=================================================>
// WATCH FILES
export const sassWatch = () => {
  gulp.watch(`${config.watch.sass}/**/*.scss`, sassBuild);
  gulp.watch(`${config.watch.sassBEM}/**/*.scss`, sassBuild);
};
// <=================================================>
