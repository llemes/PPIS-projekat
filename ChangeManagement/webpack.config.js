const path = require('path') //ne moze import ovdje, keep that in mind

const nodeExternals = require('webpack-node-externals')



module.exports = {

    mode: 'development',

    entry:'./src/index.js',

    output: {

        path: path.join(__dirname, '/dist/'),

        filename: 'main.js'

    },

    externals: [

        nodeExternals()

    ],

    module: {

        rules: [

            {

                test: /\.js$/,

                use: [

                    'babel-loader'

                     //izvrsavaju se unazad

                ],

                exclude: /node_modules/

            }

        ]

    }

}