const router = require('express').Router();
const { Comment } = require('../../models');
const auth = require("../../auth");


router.post("/", auth, (req, res) => {
    console.log("read here");
    Comment.create({
        Post_id: req.body.postId,
        body: req.body.body,
        userId: req.session.userId
    }).then(comment => {
        res.json(comment);
    }).catch(e => {
        res.status(500).json(e);
    });
})


module.exports = router;