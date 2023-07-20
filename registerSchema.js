const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String, 
  email: String,
  password: String,
  conpassword:String
});

const Register=mongoose.model("Registers",registerSchema)
module.exports=Register