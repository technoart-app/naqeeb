const server =require("express").Router();
const uuid=require("uuid");
const aws=require("aws-sdk");
var config=require("./properties/awsconfig")


var s3=new aws.S3();


s3.config.update({


    accessKeyId:config.accessKeyId,
    secretAccessKey:config.secretAccessKey,
    region:config.region,
    signatureVersion: 'v4'

})


server.get("/getQuran",(req,res)=>{
    

    var params=
    {
Bucket:'naqeeb-quran',
Key:"",
Expires:100000


    }

    result="";
  
   switch(req.query.language)
   {
       case "ENG" : params.Key="Al-Quran_ENGLISH.pdf";
       break;
       case "ROMAN": params.Key="Al-Quran_ROMAN.pdf";
       break;
       case "URDU": params.Key="Al-Quran_URDU.pdf";
       break;

   }

 
 s3.getSignedUrl("getObject",params,(err,r)=>{

    if(err)
    {
        console.log(err.message)
        res.status(400).send("not found")
    }
    else{

        res.status(200).send(
            {
                url:r
            }
        )
    }


})


   

}


    



  

)

module.exports=server
