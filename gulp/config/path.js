import * as nodePath from "path";

const baseDir = nodePath.basename(nodePath.resolve());

const result = "./dist";
const src = "./src"

export const path = {
    result: {
        files: `${result}/imports/img`,
        html: `${result}/`,
        css: `${result}/css`,
        javascript: `${result}/scripts`
    },
    src: {
        files: `${src}/imports/img/*.*`,
        html: `${src}/html/**/*.html`,
        scss: `${src}/scss/**/*.scss`,
        javascript: `${src}/scripts/**/*.js`
    },
    watch: {
        files: `${src}/imports/img/**/*.*`,
        html: `${src}/**/*.html`,
        scss: `${src}/scss/**/*.scss`,
        javascript: `${src}/scripts/**/*.js`
    },
    clean: result,
    ftp: ``
}