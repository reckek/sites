// <=================================================>
// IMPORTS
import gulp, { dest } from "gulp";
import config from "./gulp/config";
import clean from "./gulp/tasks/clean";
import server from "./gulp/tasks/server";
// WATCH
import { scriptsBuild, scriptsWatch } from "./gulp/tasks/scripts";
import { viewsBuild, viewsWatch } from "./gulp/tasks/views";
import { sassBuild, sassWatch } from "./gulp/tasks/styles";
import { assetsBuild, assetsWatch } from "./gulp/tasks/assets";
// BUILD
import { imagesBuild } from "./gulp/tasks/assets/images";
import { webpBuild } from "./gulp/tasks/assets/webp";
import { fontsBuild } from "./gulp/tasks/assets/fonts";
import { svgBuild } from "./gulp/tasks/assets/svg";
import { audioBuild } from "./gulp/tasks/assets/audio";
import { videoBuild } from "./gulp/tasks/assets/video";
// import GulpZip from "gulp-zip";
import { gZip } from "./gulp/tasks/gzip";
// <=================================================>

// <=================================================>
// CHECK IF USE ARGUMENT "--prod" return true
config.setEnv();
// <=================================================>

// <=================================================>
// BUILD FILES
export const build = gulp.series(
  clean,
  gulp.parallel(
    //
    viewsBuild,
    scriptsBuild,
    sassBuild,
    assetsBuild
    // webpBuild
  )
);
// <=================================================>

// <=================================================>
export const zip = gulp.series(
  clean,
  gulp.parallel(
    //
    viewsBuild,
    scriptsBuild,
    sassBuild,
    assetsBuild
    // webpBuild
  ),
  gZip
);
// <=================================================>

// <=================================================>
// MONITOR FILE CHANGES
export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    //
    viewsWatch,
    scriptsWatch,
    sassWatch,
    assetsWatch
  )
);

export default watch;
// <=================================================>

// <=================================================>
// Быстрый доступ
exports.scripts = scriptsBuild;
exports.views = viewsBuild;
exports.sass = sassBuild;
exports.assets = assetsBuild;
exports.fonts = fontsBuild;
exports.images = imagesBuild;
exports.webp = webpBuild;
exports.svg = svgBuild;
exports.audio = audioBuild;
exports.video = videoBuild;
// <=================================================>
