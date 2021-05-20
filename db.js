const mongoose = require("mongoose");
require('dotenv').config()

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

mongoose.connect(process.env.DB_URI, options).then(
    () => {
        console.log("project_3 is ready");
    },
    (err) => {
        console.log(err);
    }
);