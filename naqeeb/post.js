const posts =require("express").Router();
const vtoken=require("./verifyauthtoken");

posts.get("/myposts",vtoken,(req,res)=>{

res.send(

    {
    name:"syed",
    location:"Hyderabad"    
    
    }
)

})




module.exports=posts;