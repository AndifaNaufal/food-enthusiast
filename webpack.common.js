const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
 
module.exports = {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
       {
        test: /\.(png|svg|jpg|gif)$/,
         use: [
          'file-loader',
        ],
      },
      {
        test:/\.(jpg|png)$/,
        use:[
            {
                loader:'url-loader',
                options: {
                    limit:25000,
                }
            }
        ]
    }      
      ],

    },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       }),
       new CopyWebpackPlugin({
         patterns: [
           {
             from: path.resolve(__dirname,'src/assets'),
             to: path.resolve(__dirname,'dist/assets')
           }
         ]
       })
   ]
};