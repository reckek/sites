// <=================================================>
// IMPORTS
import gulp, { dest } from "gulp";
import GulpZip from "gulp-zip";
import debug from "gulp-debug";
import config from "../config";
// <=================================================>
// BUILD FILES
export const gZip = () =>
  gulp
    .src(`${config.dest.root}/**`)
    .pipe(debug("GZIP => "))
    .pipe(GulpZip("dest.zip"))
    .pipe(dest(`${config.dest.gzip}`));

// <=================================================>
