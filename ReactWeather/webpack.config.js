module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx'
		},
		extensions: ['','.js','.jsx']
	},

	module:  {
		loaders: [
		  {
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react','stage-0']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		  }
		]
	}
};
