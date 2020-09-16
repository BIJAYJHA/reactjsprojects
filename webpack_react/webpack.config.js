const path=require('path');
const autoprefixer= require('autoprefixer');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./src/index.js', //this is the entry point of this project
    output:{
        path:path.resolve(__dirname,'dist'), // this says that the output must be inside the dist folder of this project
        filename:'bundele.js', //the output must be stored in the filename bundel.js file
        publicPath:''
    },
    devtool:'cheap-module-eval-source-map', //this helps how source map is generated which helps in debugging code in thr browser
    module:{
        rules:[
            {
                test:/\.js$/,  //which are the files the compiler should test
                loader:'babel-loader', // who loads these .js files ,
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                    {loader:'style-loader'},  //tye style-loader is important for injecting the css files into the html file
                    {loader:'css-loader',options:{
                        importLoaders:1,
                        modules:{
                            localIdentName:'[name]_[local]_[hash:base64:5]'
                        }
                    }
                },  //the css-loader is important for importing the css files
                 {
                     loader:'postcss-loader',options:{
                         ident:'postcss',
                         plugins:()=>[autoprefixer()]
                     } //this loader will help us with processing our css codes such that it automatically prefixes it for example automatically our css codes to work in older browsers
                 }
                ]
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader:'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname+'/src/index.html',  //this tells wqebapck that we want to use our index.html in the source folder as the starting point
            filename:'index.html',
            inject:'body'    //if you want to inject all the imports in the body of the html

        })
    ]
}