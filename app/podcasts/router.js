const express = require('express');
const router = express.Router();
const customerModel = require('./model');

async function addPodcast(req, res) {
	try {
		let response = await customerModel.create({
			name: req.body.name,
			description: req.body.description,
			genre: req.body.genre
		});
		res.status(200).json(response);
	} catch (err) {
		throw err;
	}
}

router.post('/create', addPodcast);

module.exports = router;
