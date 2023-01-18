const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json(user);
});
module.exports = router;
