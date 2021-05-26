const express = require('express');

//controllers
const { createNewComment } = require('./../controllers/comments');

//middlewares
const authentication = require('./../middlewares/authentication');
const authorization = require('./../middlewares/authorization');

const commentsRouter = express.Router();

commentsRouter.post(
	'/articles/:id/comments',
	authentication,
	authorization('CREATE_COMMENTS'),
	createNewComment,
);

module.exports = commentsRouter;
