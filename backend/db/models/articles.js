const mongoose = require('mongoose');

const articles = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' },
});

module.exports = mongoose.model('Articles', articles);
