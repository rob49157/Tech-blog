const router = require("express").Router();

const userRoutes = require("./user-routes");
const noteroute =require("./note-routes")


router.use("/users", userRoutes);
router.use("/notes", noteroute)

module.exports = router;
