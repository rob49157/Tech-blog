const router = require("express").Router();
const { Model } = require("sequelize");
const { User, Note } = require("../models");
const withAuth = require("../utility/auth");

 router.get("/", async (req, res) => {
   
  res.render("homepage", { loggedIn: req.session.loggedIn });
 });




router.get("/dashboard", withAuth, async (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});


/////////////

////////
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
