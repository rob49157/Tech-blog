const express= require('express')           
const PORT= 3000
const app= express  



app.get('/',function(req,res){
    res.send('hello world')
})

app.listen(PORT, function() {
    console.log(`Example app listening on port ${port}!`)})
