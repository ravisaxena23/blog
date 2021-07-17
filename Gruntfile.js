

module.exports = function(grunt){


    // configuration
    const sass = require('node-sass');
 
    // require('load-grunt-tasks')(grunt);
     
    // grunt.initConfig({
        
    // });
     
    grunt.registerTask('default', ['sass']);
    grunt.initConfig({

        // pass in options, plugins, references to files etc
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'app.js'
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'css/styles.css': 'css/sass/styles.scss'
                }
            }
        },
        // uglify: {
        //     build:'app.js',
        //     dest: 'dest/app.js'
        // }
        uglify: {
            dev: {
                options: {
                    mangle: true
                },
                files: {
                    'dest/dest.min.js': 'app.js'
                }
            }
        },

    })

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass']);
    // grunt.loadNpmTasks('grant-contrib-concat');

    // register task

     
    // grunt.registerTask('run',function(){
    //     console.log('i am running')
    // })
    // grunt.registerTask('sleep',function(){
    //     console.log('i am sleeping')
    // })
    // grunt.registerTask('all',['sleep','run'])
};  