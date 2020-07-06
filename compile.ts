import { compile, NexeOptions } from 'nexe'

interface ICompile {
    build: boolean
    make: string[]
    mangle: boolean
    configure: string[]
    input: string
    loglevel: string
    targets: string[]
    patches: any[]
}

let config: ICompile
config = {
    build: true,
    make: ['-j10'],
    mangle: false,
    configure: ['--openssl-no-asm'],
    input: '/app.js',
    loglevel: 'verbose',
    targets: ['macos-v12.16.3'],
    patches: [
        (compiler: any, next: any) => {
            compiler.code = () =>
                [compiler.shims.join(''), compiler.startup].join(';')
            return next()
        },
        (compiler: any, next: any) => {
            return compiler
                .setFileContentsAsync(
                    'lib/_third_party_main.js',
                    compiler.code()
                )
                .then(next)
        },
    ],
}
const build = (config: ICompile | any) => {
    compile(config)
}

build(config)
