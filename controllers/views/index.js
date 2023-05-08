const router = require('express').Router();
const homeRoutes = require("./homeRoutes");
const profileRoutes = require("./profileRoutes");
router.use("/", homeRoutes);
router.use("/profile", profileRoutes);
module.exports = router;