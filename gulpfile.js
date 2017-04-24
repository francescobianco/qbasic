
var gulp = require("gulp");
var rename = require("gulp-rename");
var concatCss = require("gulp-concat-css");
var modifyCssUrls = require("gulp-modify-css-urls");
var basename = require("path").basename;

gulp.task("default", function() {
    gulp.src("./node_modules/**/css/*.css")
        .pipe(concatCss("style.css"))
        .pipe(modifyCssUrls({ modify: function (url, filePath) { return "../fonts/" + basename(url); } }))
        .pipe(gulp.dest("./css"));
    gulp.src("./node_modules/**/fonts/*.{ttf,woff,eof,eot,svg,htc}")
        .pipe(rename({ dirname: '' }))
        .pipe(gulp.dest("./fonts"));
});
