const express = require("express");
const { uuid } = require("uuidv4");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const db = require("./db");
const { User, Article } = require("./schema");

const app = express();
const port = 5000;
app.use(express.json());

const articles = [{
        id: 1,
        title: "How I learn coding?",
        description: "Lorem, Quam, mollitia.",
        author: "Jouza",
    },
    {
        id: 2,
        title: "Coding Best Practices",
        description: "Lorem, ipsum dolor sit, Quam, mollitia.",
        author: "Besslan",
    },
    {
        id: 3,
        title: "Debugging",
        description: "Lorem, Quam, mollitia.",
        author: "Jouza",
    },
];

app.get("/articles", (req, res, next) => {
    // res.status = 200;
    // res.json(articles);

    Article.find({})
        .then((result) => {
            res.status(200);
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.get("/articles/search_1", (req, res, next) => {
    // const authorName = req.query.author;

    // const byAuthor = articles.filter((element) => {
    //     return element.author === authorName;
    // });
    // res.status = 200;
    // res.json(byAuthor);

    const authorId = req.query.authorId;
    Article.find({ author: authorId })
        .then((result) => {
            res.status(200);
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.get("/articles/search_2", (req, res, next) => {
    const articleId = JSON.parse(req.query.id);
    console.log(articleId);
    const byId = articles.filter((element) => {
        return element.id === articleId;
    });
    res.status = 200;
    res.json(byId);
});

app.post("/articles", (req, res, next) => {
    const { title, description, author } = req.body;
    const newArticle = new Article({ title, description, author });

    // const newArticle = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     author: req.body.author
    // };

    newArticle.id = uuid();

    // articles.push(newArticle);
    // res.status = 201;
    // res.json(newArticle);

    newArticle
        .save()
        .then((result) => {
            res.status(201);
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.put("/articles/:id", (req, res, next) => {
    const articleId = JSON.parse(req.params.id);

    let i;
    let found = articles.find((element, index) => {
        i = index;
        return element.id === articleId;
    });

    found = {
        id: articleId,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
    };

    articles.splice(i, 1, found);

    res.status = 200;
    res.json(found);
});

app.delete("/articles/:id", (req, res, next) => {
    const articleId = JSON.parse(req.params.id);

    if (articleId < articles.length) {
        let i;
        let found = articles.find((element, index) => {
            i = index;
            return element.id === articleId;
        });
        articles.splice(i, 1);

        res.status = 200;
        res.json({
            success: true,
            message: `Success Delete article with id => ${articleId}`,
        });
    } else {
        res.status = 404;
        res.json({
            success: false,
            message: `Please enter a valid article id --> from (1 to ${articles.length})`,
        });
    }
});

app.delete("/articles", (req, res, next) => {
    const articleAuthor = req.body.author;

    const sortedByAuthor = [];
    articles.forEach((element, index) => {
        if (element.author === articleAuthor) {
            articles.splice(index, 1);
            sortedByAuthor.push(element);
        }
    });
    if (sortedByAuthor[0]) {
        res.status = 200;
        res.json({
            success: true,
            message: `Success delete all the articles for the author => ${articleAuthor}`,
        });
    } else {
        res.status = 404;
        res.json({
            success: false,
            message: `Please enter a valid author name`,
        });
    }
});

const createNewAuthor = (req, res, next) => {
    const { firstName, lastName, age, country, email, password } = req.body;
    const newAuthor = new User({
        firstName,
        lastName,
        age,
        country,
        email,
        password,
    });

    newAuthor
        .save()
        .then((result2) => {
            res.status(201);
            res.json(result2);
            next();
        })
        .catch((err2) => {
            res.json(err2);
        });
};

app.post("/users", createNewAuthor);

const login = (req, res, next) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    User.findOne({ email }).then((result2) => {
        if (result2) {
            if (password === "") {
                res.status(404);
                res.json({
                    message: "please enter a password",
                    status: 404,
                });
            }
            bcrypt.compare(password, result2.password, (err, result) => {
                if (result2) {
                    const payload = {
                        userId: result._id,
                        country: result.country,
                    };
                    const options = { expiresIn: "60m" };

                    const TOKEN = { token: jwt.sign(payload, SECRET, options) };
                    res.json(TOKEN);
                }

                if (!result2) {
                    res.status(403);
                    res.json({
                        message: "The password wou have entered is incorrect",
                        status: 403,
                    });
                }
            });
        } else {
            res.status(404);
            res.json({
                message: "The email doesnt exist",
                status: 404,
            });
        }
    });
};
app.post("/login", login);











const authentication = (req, res, next) => {

    jwt.verify(TOKEN, SECRET, (err, result) => {
        if (err) {
            res.send(err)
        };
        next();
    });
};





const creatNewComment = (req, res, next) => {

    const { comment, commenter } = req.body;
    newComment = new Comment({ comment, commenter });

    newComment
        .save()
        .then((result2) => {
            res.status(201);
            res.json(result2);
        })
        .catch((err) => {
            res.json(err);
        });
};

app.post("/articles/:id/comments", creatNewComment, authentication);







app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});