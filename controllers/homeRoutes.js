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

// router.get(/)

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

router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      }
    ]
  }).then (data => {
    if (data)
    {
      const post = data.get({plain: true});
      console.log(post);
      res.render('single-post', {post});
    }
    else
    {
      res.status(400).end();
    }
  }).catch(e => {
    res.status(500).json(e).end();
  });
})

module.exports = router;
