const router = require("express").Router();
const {
    User
}=require("../../models");

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);

    req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        req.session.username = user.name;
        res.status(200).json(user);
      });
    } catch (error) {
        res.status(400).json(err);
    }
})
module.exports = router