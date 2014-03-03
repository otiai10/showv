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
            default:
                files: ['src/**/*.ts']
                tasks: ['build']
            sample:
                files: ['sample/src/**/*.ts']
                tasks: ['typescript:sample']
 

    grunt.loadNpmTasks 'grunt-typescript'
    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks 'grunt-regarde'

    grunt.registerTask 'compile', ['typescript:compile']
    grunt.registerTask 'squash',  ['concat:showv']
    grunt.registerTask 'build',   ['squash','compile']
    grunt.registerTask 'test',    ['clean:all', 'build', 'typescript:test']
    grunt.registerTask 'sample',  ['typescript:sample', 'regarde:sample']
    grunt.registerTask 'watch',   ['build', 'regarde:default']

    grunt.registerTask 'default', ['build']
