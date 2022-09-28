const express = require('express');

const controller = require('../controllers/user');

const router = express.Router();
router.get('/get', controller.getUser);
router.post('/post', controller.postUser);

module.exports=router