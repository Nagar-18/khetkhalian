const express = require("express");
const router= express.Router();
const User =  require("../modals/Schema");



router.post("/createuser",async(req,res)=>{
  
 try {
     const user= new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            Geolocation:req.body.Geolocation
        
        });
        const userdata = await user.save();
        res.json({success:true});

    } catch (error) {
        console.log(error);
        res.send({success:false});
    }
   
});



router.post("/loginuser",async(req,res)=>{

    let email=req.body.email;
        try {
            
            let userdata= await User.findOne({email});
    
            if(userdata)
            res.send(true)
            else
            res.send(false)
       
        } catch (error) {
            res.send(error);
            
        }
    })
    
    
    
    
    
    
    module.exports=router;