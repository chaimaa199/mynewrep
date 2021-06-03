const express=require('express')
const router =express.Router()
const signupTemplateCopy=require('../models/signupmodels')

router.post('/signup',(req,res)=>{
    const signedupUser=new signupTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signedupUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error =>{
      res.json(error)
    })
})
module.exports=router