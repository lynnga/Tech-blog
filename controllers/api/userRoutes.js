const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
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
  console.log("in login now")
  User.findOne({
    where: {
      username: req.body.username,
    }
  }).then(user => {
    if (!user)
    {
      res.status(500).send("Invalid username");
      console.log("here");
      return;
    }

    const isValidPw = verifyPass(req.body.password);

    if (!isValidPw)
    {
      res.status(500).send("Invalid password");
      console.log("there");
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      
      res.redirect("/");
    })
  })
})

module.exports = router;
