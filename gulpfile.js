var ts = require('gulp-typescript');
var gulp = require('gulp');

var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function(){                //Output to root folder, that's the ""
    return tsProject.src().pipe(ts(tsProject)).pipe(gulp.dest(""));
});

gulp.task("watch", function(){
  gulp.watch("*.ts", ["typescript"]);
});

gulp.task("default", ["watch"]);
