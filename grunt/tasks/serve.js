module.exports = function (grunt) {
    grunt.registerTask('serve', [
        'concurrent:server',
        'connect:server',
        'karma:server',
        'open',
        'watch'
    ]);

    grunt.registerTask('serve:dist', [
        'connect:dist',
        'open'
    ]);
};
