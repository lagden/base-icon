module.exports = {
	js2svg: {
		indent: 2,
		pretty: true,
	},
	plugins: [
		{name: 'removeDimensions'},
		{name: 'removeDoctype'},
		{name: 'removeXMLProcInst'},
		{name: 'removeComments'},
		{name: 'removeMetadata'},
		{name: 'removeEditorsNSData'},
		{name: 'removeTitle'},
	],
}
