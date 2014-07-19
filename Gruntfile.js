module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        autoshot: {
            mine: {
                options: {
                    path: 'shots/',
                    remote: {
                        files: [{
                            src: 'http://css-tricks.com/',
                            dest: 'css-tricks.png',
                            delay: 1000,
                        }]
                    },
                    local: {
                        files: []
                    },
                    viewport: ['320x480', '1024x768', '1920x1080']
                }
            }
        }
    });

    // Load the plugin that provides the "autoshot" task.
    grunt.loadNpmTasks('grunt-autoshot');

    // Default task(s).
    grunt.registerTask('default', ['autoshot']);

};