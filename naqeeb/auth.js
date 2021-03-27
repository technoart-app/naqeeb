const auth =require("express").Router();
const dbcon=require("./DB/mysqldbconnect")
const bodyparser=require("body-parser");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


// requests to add user
auth.post('/adduser',async (req,res)=>{

 
    result='';



    //password Hashing

    const salt=await bcrypt.genSalt(10)

    const hashedpassword =await bcrypt.hash(req.body.password,salt);
    





    let  sqlinsert=
    "INSERT INTO `naqeeb`.`users` (`First_Name`, `Last_Name`, `Address`, `Approved`, `IsActive`, `DOB`, `Pswrd`, `salt`, `Email`, `Contact_No`, `verified`, `Gender`, `Role_ID`) VALUES ('"+req.body.first_Name+"', '"+req.body.last_Name+"', '"+req.body.addr+"', 'no', 'yes', '"+req.body.DOB+"', '"+hashedpassword+"', '"+salt+"', '"+req.body.email+"', '"+req.body.contactNo+"', 'no', '"+req.body.gender+"', '"+req.body.role_ID+"');";
    console.log(sqlinsert)
     dbcon.query(
 sqlinsert, (err,response)=>{
 if(err)
 console.log(err)
 result=response;
 
 })
 
 res.send(result)
 })
 
  // login request

 auth.post('/login',  (req,res)=>{
     
var dbresponse;
sqllogin="Select * from naqeeb.users where  email='"+req.body.email+"';";

dbcon.query(sqllogin, async(err,result)=>{
if(err)
console.log(err);

const valid=await bcrypt.compare(req.body.password,result[0].Pswrd)

if(!valid)
{
return res.status(401).send("Incorrect Password")

}
else
{
   
const token=jwt.sign({id:result[0].User_ID},"abcdefghijk")
res.header('auth-token',token).send("logged in Successfully")

}

})




 })




module.exports=auth