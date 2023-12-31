const express = require('express');
const parser = require('../../config/cloudinary');
const User = require('../../controllers/usercontroller/auth');
const router = express.Router();

router.post('/login', User.login);
router.post('/register', parser.single('imageUrl'), User.register);

module.exports = router;
