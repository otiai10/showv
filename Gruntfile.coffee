module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        typescript:
            # "typescript:compile"タスク
            # compiled/showv.tsファイルをjsにビルドする
            compile:
                src: ['compiled/showv.ts']
                dest: 'build/showv.js'
                options:
                    module: 'commonjs'
                    target: 'es3'
                    declaration: true # 同時にshowv.d.tsもつくる
            # "typescript:test"タスク
            # test/のtsファイルをそれぞれ別に
            # compiled/**/*.jsファイルにする
            test:
                src: [
                    'test/**/*.ts'
                ]
                dest: 'compiled'
                options:
                    module: 'commonjs'
                    target: 'es3'
        concat:
            showv:
                src: ['src/**/*.ts']
                dest: 'compiled/showv.ts'

    grunt.loadNpmTasks 'grunt-typescript'
    grunt.loadNpmTasks 'grunt-contrib-concat'

    grunt.registerTask 'compile', ['typescript:compile']
    grunt.registerTask 'squash',  ['concat:showv']
    grunt.registerTask 'build',   ['squash','compile']
    grunt.registerTask 'test',    ['build', 'typescript:test']

    grunt.registerTask 'default', ['build']
