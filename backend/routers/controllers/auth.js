const usersModel = require('./../../db/models/users');

const login = (req, res) => {
	const { email, password } = req.body;

	usersModel
		.authenticateBasic(email, password)
		.then((result) => {
			if (result[1] === 200)
				return res.status(result[1]).json({ token: result[0] });

			res.status(result[1]).json(result[0]);
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	login,
};
