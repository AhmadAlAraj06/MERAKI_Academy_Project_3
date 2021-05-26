const mongoose = require('mongoose');

const roles = new mongoose.Schema({
	role: { type: String, required: true },
	permissions: { type: Array, required: true },
});

module.exports = mongoose.model('Roles', roles);
