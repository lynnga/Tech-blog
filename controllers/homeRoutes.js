const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

router.get("/", async (req, res) => {
  Post.findAll({ include: [User] })
    .then((db) => {
      const posts = db.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.get("/login", (req, res) => {
  if (req.session.logedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});


module.exports = router;
