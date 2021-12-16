const router = require('express').Router();
const { Note } = require("../../models");



router.get('/', async (req, res) => {
    console.log('asdfasdfasdf')
    const categories = await Note.findAll({
     
      
    })
    res.render("notes")
    
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
  
  router.post('/',  async (req, res) => {
      try {
        const categories = await Note.create(req.body);
        res.status(200).json(categories);
      } catch (err) {
        res.status(400).json(err)
      }
      return res.render("notes")
     
   });
   
   // update a category by its `id` value
   router.put('/:id', async (req, res) => {
     const categories=  await Note.update({
      category_name: req.body.category_name
     },
     { where:{
      id: req.params.id
     }
  
     })
     return res.render("notes")
   })
    
  // delete a category by its `id` value
  router.delete('/:id', (req, res) => {
    const categories= Note.destroy({
      where: {
        id: req.params.id
      },
    })
      return res.render("notes")
  });
     
  
  module.exports = router;
  