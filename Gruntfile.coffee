module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        typescript:
            compile:
                src: ['compiled/showv.ts']
                dest: 'build/showv.js'
                options:
                    module: 'commonjs'
                    target: 'es3'
                    declaration: true
            test:
                src: [
                    'test/**/*.ts'
                ]
                dest: 'compiled'
                options:
                    module: 'commonjs'
                    target: 'es3'
            sample:
                src: [
                    'sample/src/**/*.ts'
                ]
                dest: 'sample/sample.js'
                options:
                    module: 'commonjs'
                    target: 'es3'
        concat:
            showv:
                src: ['src/**/*.ts']
                dest: 'compiled/showv.ts'
        clean:
            all:
                src: [
                    'compiled/**/*'
                    'build/**/*'
                ]
        regarde:
            src:
                files: [
                    'src/**/*.ts'
                    'sample/src/**/*.ts'
                ]
                tasks: ['sample']
 

    grunt.loadNpmTasks 'grunt-typescript'
    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks 'grunt-regarde'

    grunt.registerTask 'compile', ['typescript:compile']
    grunt.registerTask 'squash',  ['concat:showv']
    grunt.registerTask 'build',   ['squash','compile']
    grunt.registerTask 'test',    ['clean:all', 'build', 'typescript:test']
    grunt.registerTask 'sample',  ['clean:all', 'build', 'typescript:sample']
    grunt.registerTask 'watch',   ['sample', 'regarde']

    grunt.registerTask 'default', ['build']
