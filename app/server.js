const app = require('./index');
const config = require('./config');
const mongoose = require('mongoose');

(async function() {
	try {
		await mongoose.connect(
			`mongodb://${config.mongodb.host}:${config.mongodb.port}/podcast`,
			{
				useNewUrlParser: true
			}
		);
	} catch (err) {
		throw err;
	}
})();
app.listen(config.express.port, config.express.ip);
