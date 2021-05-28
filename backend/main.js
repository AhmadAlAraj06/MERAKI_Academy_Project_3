const express = require('express');
const cors = require('cors');
const db = require('./db/db');
require('dotenv').config();

//routers
const articlesRouter = require('./routers/routes/articles');
const usersRouter = require('./routers/routes/users');
const authRouter = require('./routers/routes/auth');
const commentsRouter = require('./routers/routes/comments');
const roleRouter = require('./routers/routes/role');

const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());

// router middleware
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use(authRouter);
app.use(commentsRouter);
app.use(roleRouter);

app.post('/aa', (req, res) => {
  console.log('POST /aa');
  res.json('result');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
