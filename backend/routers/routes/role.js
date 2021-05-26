const express = require('express');

//controllers
const { createNewRole } = require('./../controllers/role');

const roleRouter = express.Router();

roleRouter.post('/role', createNewRole);

module.exports = roleRouter;
