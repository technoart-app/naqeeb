const mysql=require("mysql")
const propertiesreader=require("properties-reader")
const path=require("path")


var properties=propertiesreader(path.join(__dirname,'../properties/prod.properties'));
console.log("connected")
const dbcon=mysql.createConnection(
    
{
host:properties.get('db.host'),
password:properties.get('db.password'),
user:properties.get('db.username'),
port:properties.get('db.port')

})

dbcon.connect((err,s)=>{
if(err)
{}
else{
    console.log("connected")
}


})



module.exports=dbcon





