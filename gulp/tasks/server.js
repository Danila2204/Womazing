export const server = done => {
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.result.html}`
        }
    });
}