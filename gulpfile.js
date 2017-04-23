
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task("default", function() {
    gulp.src("./node_modules/**/css/*.css")
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("./css"));
    gulp.src("./node_modules/**/fonts/*.{ttf,woff,eof,eot,svg,htc}")
        .pipe(gulp.dest("./fonts"));
});