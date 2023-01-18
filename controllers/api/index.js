const router = require('express').Router();

const userRoutes= require('./userRoutes');
const postRouter= require('./postRoutes');

router.use('/user', userRoutes);
router.use('/post', postRouter);

module.exports= router