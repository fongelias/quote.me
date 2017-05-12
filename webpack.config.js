//DEPENDENCIES=============================================================
const path = require('path');

//Module==================================================================
module.exports = {
	entry: { //Where bundler starts
		quoteApp: './dev/js/containers/quoteApp.jsx'
	},
	output: { //Where bundled code is to be saved
		path: path.resolve('dev/js/compiled/'), 
		filename: '[name].js',
	},
	module: {
		loaders: [ //Transformations
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.jsx$/, loader:'babel-loader', exclude: /node_modules/}
		]
	}
}