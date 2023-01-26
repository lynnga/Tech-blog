const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  console.log("herehrhehr");
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  req.session.save(()=>{
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.loggedIn = true;
    res.json(user);
  })
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    }
  }).then(user => {
    console.log(user);
    if (user == null)
    {
      res.status(400).json({ message: "Please enter a valid username!" });
      return;
    }

    const isValidPw = user.verifyPass(req.body.password);

    if (!isValidPw)
    {
      res.status(500).send("Invalid password").end();
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      setTimeout(() => {
        console.log("here"), 2000
      })
      res.redirect("/");
    })
  })
})

router.get("/logout", (req,res) => {
  if (req.session.loggedIn)
  {
    req.session.destroy(() => {
      res.status(200).send("You have been log out").end();
    })
  }
  else {
    res.redirect('/');
  }
})

router.delete("/user/:id", (req, res) => {
  User.destroy({
    where: {
      id : req.params.id,
    },
  }).then((user) => {
    if (user == null)
    {
      res.status(500).send("Invalid user id");
    }
    else
    {
      res.status(200).send(user);
    }
  }).catch(e => {
    console.log("error HERE", e);
    res.status(500).send(e);
  })
})

module.exports = router;
