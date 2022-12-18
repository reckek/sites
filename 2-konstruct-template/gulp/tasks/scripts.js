// <=================================================>
// IMPORTS
import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import config from "../config";
// <=================================================>

// <=================================================>
// BUILD FILES
export const scriptsBuild = () =>
  browserify(`${config.src.js}/main.js`, { debug: true })
    .transform("babelify", { presets: ["@babel/preset-env"] })
    .bundle()
    .on("error", function browserifyError(error) {
      console.log(error.stack);
      this.emit("end");
    })
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(gulp.dest(config.dest.js))
    .pipe(gulpif(config.isDev, sourcemaps.init({ loadMaps: true })))
    .pipe(uglify())
    .pipe(gulpif(config.isDev, sourcemaps.write()))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.dest.js));
// <=================================================>

// <=================================================>
// WATCH FILES
export const scriptsWatch = () => {
  gulp.watch(`${config.watch.js}/**/*.js`, scriptsBuild);
  gulp.watch(`${config.watch.jsBEM}/**/*.js`, scriptsBuild);
};
// <=================================================>
