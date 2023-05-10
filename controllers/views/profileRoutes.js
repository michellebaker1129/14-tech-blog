const router = require('express').Router();
router.get("/", function (req, res) {
    //get profile of signed in user//
    res.render("profile")
})
module.exports = router;