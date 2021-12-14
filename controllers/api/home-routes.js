const router = require("express").Router();
const { Model } = require("sequelize");
const { Coin, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/search", async (req, res) => {
  res.render("searchcrypto", { loggedIn: req.session.loggedIn });
});
// rendering sql data

// router.get('/dashboard',async (req,res)=>{
//   try {
//     const coindata =await User.findAll({
//       include:[
//         {
//         model:Coin,
//         attributes:['name']
//       }
//     ],
//   })

// const coins= coindata.map((coin)=>coin.get({plain: true}))
// res.render('APIDATA'),{
//   coins,
//   loggedIn: req.session.loggedIn})

//   }catch(err){
//     res.status(500).json(err);
//   }

router.get("/dashboard", withAuth, async (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});

// display from database
router.get("/definitions", withAuth, async (req, res) => {
  res.render("definitions", { loggedIn: req.session.loggedIn });

  const coindata = await Coin.findAll({
    include: [{ Model: User, attributes: ["name"] }],
  });

  console.log("dadasdasd");
  const coins = coindata.map((coinDefinitions) =>
    coinDefinitions.get({ plain: true })
  );
  res.render("APIDATA"),
    {
      coinDefinitions,
      loggedIn: req.session.loggedIn,
    };
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
