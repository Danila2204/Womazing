import ghPages from "gh-pages";

const deploy = () => {
    return app.gulp.src("./dist**/*.*")
        .pipe(ghPages())
}