export const scripts = () => {
    return app.gulp.src(app.path.src.javascript)
        .pipe(app.gulp.dest(app.path.result.javascript))
}