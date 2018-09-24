const webpack = require ('webpack');
const path = require ('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    devtool: NODE_ENV === 'development' && 'eval-source-map',
    watch: NODE_ENV === 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify (NODE_ENV)
            }
        })
    ]
};

