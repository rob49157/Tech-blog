const router = require('express').Router();
const { Note } = require("../../models");
const get= require("../../views/dashboard")


router.get('/', async (req, res) => {
    notes = await Note.findAll({})
    res.send(notes)
  });
  
  // find one category by its `id` value
  router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    const note = await Note.findByPk(req.params.id)
      .then(result => {
        console.log(result)
        res.render('details', {note: result})
      })
      .catch(err => {
        console.log(err)
      })

    } 
    
  );
  // create new post
  router.post('/post',  (req, res) => {
      const note = new Note(req.body);

      note.save()
        .then((result) => {
            res.redirect('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })     
   });
   
 
    
  // delete a post by its `id` value
  router.delete('/:id', async (req, res) => {
    const id = await Note.destroy({
      where:{
        ID: req.params.id
      }

    })
    .then(result =>{
      console.log(result)
      // res.redirect('/dashboard')
    })
    .catch(err=>{
      console.log(err)
    })
   
  })

 
     
  
  module.exports = router;