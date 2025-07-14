const path= require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports= {
    
    entry: {
        'app': './src/index.js',
    },
    output: {
        publicPath:'/',
        
        path: path.join(__dirname, "/app"),
        filename: 'app.js',
    },

    // هذه بديلة عن اوبتيماز
      mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [
            `...`,
            ]},
    
   
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        
        port:8081,
        writeToDisk: true,
        
        
    },

    module: {
        rules:[
            {
                test: /\.html$/,
                use: [
                    {
                        loader:"html-loader"
                    }
                ]
            },
            {

            test: /\.(sass|css|scss)$/,

            use: [

              MiniCssExtractPlugin.loader,

              "css-loader",
                "postcss-loader",
              "sass-loader",

            ],

          },
    //       {

    //             test: /\.(svg|eot|woff|woff2|ttf|otf)$/,
    //             type: 'asset/resource',

    //             exclude: /images/,

    //             use: [

    //             {

    //                 loader: "file-loader", 

    //                 options: {

    //                  name: 'fonts/[name].[ext]',
    //                 generator: {
    //                             filename: 'fonts/[name][ext]',
    //                         },

    //                 outputPath: "assets/fonts",

    //                 }

    //             }

    //     ]

    //   },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /images/,
        type: 'asset/resource',
        loader: "file-loader",
        generator: {
        filename: 'fonts/[name][ext]',
        outputPath: "assets/fonts",
        },
        },
          

        ]
        
    },
    plugins: [
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin({

            filename: "assets/css/style.css"

        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        })
    ]
}
