const router = require("express").Router();
const { Model } = require("sequelize");
const { Coin, User } = require("../models");
const withAuth = require("../utility/auth");

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/search", async (req, res) => {
  res.render("searchcrypto", { loggedIn: req.session.loggedIn });
});


router.get("/dashboard", withAuth, async (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});


/////////////
//   console.log("dadasdasd");
//   const coins = coindata.map((coinDefinitions) =>
//     coinDefinitions.get({ plain: true })
//   );
//   res.render("APIDATA"),
//     {
//       coinDefinitions,
//       loggedIn: req.session.loggedIn,
//     };
// });
////////
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
