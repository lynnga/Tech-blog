const router = require("express").Router();
const { Post } = require("../../models");
const auth = require("../../auth");

router.post("/", async (req, res) => {
  const { title, body } = req.body;
  const user_id = req.session.user_id;

  const post = await Post.create({
    title,
    body,
    user_id,
  });

  res.json(post);
});





module.exports = router;
