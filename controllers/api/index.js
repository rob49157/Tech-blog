const router = require("express").Router();

const userRoutes = require("./user-routes");
const priceRoutes = require("./price-routes");

router.use("/users", userRoutes);
router.use("/price", priceRoutes);
module.exports = router;
