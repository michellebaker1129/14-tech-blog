const router = require('express').Router();
const {
    User, Post, Comment
}= require("../../models")
//route tested
router.get("/", async (req, res) => {
    //get all posts//
    try {
        const postData = await Post.findAll({
            include: [User, Comment]
        })
        const posts = postData.map((post) => post.get({ plain: true }));
        // res.json(posts)
        // Pass serialized data and session flag into template
        res.render('homepage', { 
          posts, 
          logged_in: req.session.logged_in 
        });
    } catch (error) {
        res.status(500).json(err);
    }
});
router.get("/post/:id", (req, res) => {
    //get one post//
    res.render("post")
});
router.get("/login", (req, res) => {
    res.render("login")
});
router.get("/signup", (req, res) => {
    res.render("signup")
});
module.exports = router;