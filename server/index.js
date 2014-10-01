var feathers = require('feathers');

feathers()
	.use(feathers.directory(__dirname + '/../client/'))
	.use(feathers.static(__dirname + '/../client/'))
	.listen(8080);

console.log('Listening on http://localhost:8080');
