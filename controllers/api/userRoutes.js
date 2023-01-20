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

module.exports = router;
