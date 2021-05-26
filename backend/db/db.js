const mongoose = require('mongoose');
require('dotenv').config();

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

// connecting mongoose
mongoose.connect(process.env.DB_URI, options).then(
	() => {
		console.log('DB Ready To Use');
	},
	(err) => {
		console.log(err);
	},
);
