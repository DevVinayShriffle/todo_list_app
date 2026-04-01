const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/driver.js', // Your main application entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // or 'production'
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from a public folder if needed
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Use your existing index.html as a template
      inject: 'body', // Inject the bundle script at the end of the body
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'], // Loader to handle HTML templates
      },
      // Add loaders for CSS, images, etc. as needed
    ],
  },
  resolve: {
    // Aliases to ensure correct dependencies are loaded
    alias: {
      'underscore': 'underscore/underscore.js',
      'backbone': 'backbone/backbone.js',
      'backbone.marionette': 'backbone.marionette/lib/backbone.marionette.js',
      'jquery': 'jquery/dist/jquery.js'
    }
  }
};
