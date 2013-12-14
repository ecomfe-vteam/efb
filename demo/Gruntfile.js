module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({

        copy: {
            dep: {
                files: [{
                    'asset/dep/font-awesome/css/font-awesome.css': 
                        'dep/font-awesome/css/font-awesome.min.css'
                }, {
                    expand: true,
                    cwd: 'dep/font-awesome/fonts/',
                    src: ['**'],
                    dest: 'asset/dep/font-awesome/fonts/'
                }]
            }
        },

        watch: {
            index: {
                files: ['src/index/**'],
                tasks: ['index']
            }
        },

        uglify: {
            dep: {
                options: {
                    mangle: true,
                    expect: ['require', 'define']
                },
                files: {
                    'asset/dep/esl.js': 'dep/esl/src/esl.js',
                    'asset/dep/jquery.js': 'dep/jquery/jquery.js'
                }
            }
        },

        less: {
            index: {
                files: {
                    'asset/index/index.css': 
                        'src/index/index.less'
                }
            }
        }

    });

    grunt.registerTask('dep', 'uglify:dep', 'copy:dep');
    grunt.registerTask('index', 'less:index');

};