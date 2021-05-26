const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const users = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, min: 0 },
    country: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const articles = new mongoose.Schema({
    title: String,
    description: String,
    author: { type: mongoose.Schema.ObjectId, ref: "User" },
});

const User2 = mongoose.model("User", users);
const Article2 = mongoose.model("Article", users);

module.exports.User = User2;
module.exports.Article = Article2; 








users.pre("save", async function () {
    
    this.email = this.email.toLowerCase();
    this.password= await bcrypt.hash(this.password, 10)

  });







