const router = require('express').Router();
const { Note } = require("../../models");
const get= require("../../views/dashboard")
// const submit= document.getElementById("submit")
// const update= document.getElementById("update")
// const erase= document.getElementById("delete")


router.get('/', async (req, res) => {
    notes = await Note.findAll({})
    res.send(notes)
  });
  
  // find one category by its `id` value
  router.get('/:id', async (req, res) => {
    
    console.log(req.params.id)
    const categories = await Note.findByPk(req.params.id)
      if (categories=== null){
        console.group('not found')
      } else{ 
        res.render("notes")
        console.log (categories)
      }
    } 
    
  );
  // create new post
  router.post('/post',  async (req, res) => {
      try {
        console.log('alskdfj;alskdfj;laskdfj;laskdfj')
       submit = await Note.create(req.body);
        res.status(200).json(submit);
      } 
      catch (err) {
        res.status(400).json(err)
      }
      return res.render("homepage")
      console.log('roberto')
     
   });
   console.log('robero')
   
   // update post by its `id` value
   router.put('/:id', async (req, res) => {
     update=  await Note.update({
      category_name: req.body.category_name
     },
     { where:{
      id: req.params.id
     }
  
     })
     return res.render("homepage")
   })
    
  // delete a post by its `id` value
  router.delete('/:id', (req, res) => {
    erase= Note.destroy({
      where: {
        id: req.params.id
      },
    })
      return res.render("homepage")
  });


 
     
  
  module.exports = router;