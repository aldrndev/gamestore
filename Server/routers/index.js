const express = require('express');
const router = express.Router();
const userRouter = require('./userrouter');
const adminRouter = require('./adminrouter');

router.use('/user', userRouter);
router.use('/admin', adminRouter);

module.exports = router;
