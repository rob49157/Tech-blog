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
   
   // update post by its `id` value
   router.put('/:id', async (req, res) => {
     console.log(req.body.id)
    //  update=  await Note.update({
    //   category_name: req.body.category_name
    //  },
    //  { where:{
    //   id: req.params.id
    //  }
  
    //  })
    //  return res.render("homepage")
   })
    
  // delete a post by its `id` value
  router.delete('api/notes/:id', (req, res) => {
    const id= req.params.id
    Note.findById(id)
    .then(result=>{
      res.json({redirect: '/notes'})
    })
    .catch(err =>{
      console.log(err)
    })
    
  })

 
     
  
  module.exports = router;