const express = require('express');
const Admin = require('../../controllers/admincontroller');
const router = express.Router();

router.get('/game', Admin.showGame);

module.exports = router;
