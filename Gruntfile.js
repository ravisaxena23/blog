module.exports = function(grunt){


    // configuration

    grunt.initConfig({

        // pass in options, plugins, references to files etc
        concat: {
            js: {
                src: ['js/*.js'],
                destination: 'build/app.js'
            }
        }

    })

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
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