import gulpSass from "gulp-sass";
import sass from "sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";

const scss = gulpSass(sass);

export const style = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(scss().on("error", scss.logError))
        .pipe(app.gulp.dest(app.path.result.css))
        .pipe(app.plugins.browserSync.stream());
}