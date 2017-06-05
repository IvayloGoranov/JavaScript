var gulp = require("gulp");
var minifyCss = require("gulp-clean-css");
var rename = require("gulp-rename");

gulp.task("minify-css", function() {
   return gulp.src([
       "/content/styles/*.css" //everything in content dir
   ]).pipe(minifyCss())
       .pipe(rename({suffix: ".min"}))
       .pipe(gulp.dest("content/styles"));
});