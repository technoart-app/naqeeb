const ex=require("express")
const dbcon=require("./DB/mysqldbconnect")
const bodyparser=require("body-parser");
const authroute=require("./auth")
const posts=require("./post");


    console.log(dbcon.state)

const userapp=ex();
userapp.use(ex.urlencoded())
userapp.use (ex.json())


userapp.use('/user/',authroute);

userapp.use('/posts/',posts);

userapp.listen('9001',()=>{
 
 
    console.log("userapp  running")
 
})