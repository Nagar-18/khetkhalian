const {default:mongoose} =require('mongoose')

const validator=require("validator");

const {default:isEmail}=require("validator/lib/isEmail")

const userSchema=mongoose.Schema({
    name:{
                type:String,
                required:true,
                minlength:3
            },
            email:{
                type:String,
                required:true,
                unique:[true,"Email is already Present"],
                validate(value){
                    if(!isEmail(value))
                    throw new Error("invalid  Email");
                }
        
            },
            password:{
                type:String,
                required:true,
            },
            Geolocation:{
                type:String,
                
            }
})
const User= new mongoose.model("userinfo",userSchema)
module.exports=User;






































