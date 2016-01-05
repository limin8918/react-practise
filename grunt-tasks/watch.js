module.exports = {
    express: {
        files: ['src/js/{,*/}*.js', 'src/html/index.html', 'src/scss/*.scss'],
        tasks: [ 'express:dev:stop', 'express' ],
        options: {
            atBegin:true,
            spawn: false,
            livereload: 35728
        }
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    sass: {
        files: ['src/scss/{,*/}*.{scss,sass}'],
        tasks: ['sass']
    }
};
