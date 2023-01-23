const router = require("express").Router();
const { Post } = require("../../models");
const auth = require("../../auth");

router.post("/", auth, async (req, res) => {
  const user_id = req.session.userId;

  Post.create({...req.body, userId: req.session.userId})
    .then(post => {
      res.json(post);
    })
    .catch(e => {
      rse.status(500).json(e);
    })
});

router.put(":/id", auth, (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then(row => {
      if ( row > 0 )
      {
        res.status(200).end();
      }
      else
      {
        res.status(400).end();
      }
    })
    .catch((e) => {
      res.status(500).json(e);
    })
})




module.exports = router;
