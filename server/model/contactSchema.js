const mongoose =require("mongoose") ;
const ContactFormModel = new mongoose.Schema(
  {
    firstname: {
      type:String,
   
    },
    lastname: {
      type: String,
      required: true,
    },
        email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    address:{
       type:String,
       required: true,
    },
    post: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ContactFormSchema = mongoose.model("contactform", ContactFormModel);
module.exports = ContactFormSchema;
