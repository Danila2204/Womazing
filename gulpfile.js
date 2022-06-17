import gulp from "gulp";
import { plugins } from "./gulp/config/plugins.js";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { style } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
import { scripts } from "./gulp/tasks/scripts.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watcher() {
    gulp.watch(app.path.watch.files, copy);
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.scss, style);
    gulp.watch(app.path.watch.javascript, scripts);
    gulp.watch(path.watch.html).on("change", plugins.browserSync.reload);
    gulp.watch(path.watch.javascript).on("change", plugins.browserSync.reload);
}

const parallel = gulp.parallel(copy, html, style, scripts);
const dev = gulp.series(parallel, gulp.parallel(watcher, server));

gulp.task("default", dev);