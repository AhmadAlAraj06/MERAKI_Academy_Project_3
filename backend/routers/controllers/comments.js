const commentsModel = require('./../../db/models/comments');

const createNewComment = (req, res) => {
	const { comment, commenter } = req.body;

	const newComment = new commentsModel({
		comment,
		commenter,
	});

	newComment
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	createNewComment,
};
