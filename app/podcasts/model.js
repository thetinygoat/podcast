const mongoose = require('mongoose');
const podcastSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	genre: {
		type: [String],
		required: true
	}
});

const podcastModel = mongoose.model('Podcasts', podcastSchema);

module.exports = podcastModel;
