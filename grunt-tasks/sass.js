module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: 'src/scss',
            src: ['main.{scss,sass}'],
            dest: 'public/css',
            ext: '.css'
        }]
    }
};
