const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();
app.use(cors());
app.use(express.json());
const urldb="mongodb://localhost:27017/contactform";
const PORT=8090;
const ContactFormSchema =require("./model/contactSchema");
//ApI
app.post("/form",async(req,res)=>{
    console.log(req.body)
    const data=new ContactFormSchema(req.body)
    await data.save();
   res.send({success:true,message:"saved data"})
})
mongoose.connect(urldb).then(()=>{
    console.log("DB connencted")}
);
app.listen(PORT,()=>console.log(`server is running on prot ${PORT}`));