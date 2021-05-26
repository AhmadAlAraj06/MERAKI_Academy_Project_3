const express = require('express');
const db = require('./db/db');
require('dotenv').config();

//routers
const articlesRouter = require('./routers/routes/articles');
const usersRouter = require('./routers/routes/users');
const authRouter = require('./routers/routes/auth');
const commentsRouter = require('./routers/routes/comments');
const roleRouter = require('./routers/routes/role');

const app = express();

//built-in middlewares
app.use(express.json());

// router middleware
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use(authRouter);
app.use(commentsRouter);
app.use(roleRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
