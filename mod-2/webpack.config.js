module.exports = {
    entry: './demo.ts',
    output: {
        filename: 'demo.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
}