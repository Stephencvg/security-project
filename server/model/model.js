require('dotenv').config()
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption')


const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password:{
   type: String,
  required: true
  }
})
const secret = process.env.SECRET

Schema.plugin(encrypt,{secret:secret, encryptedFields:["password"]});

const userDb =new mongoose.model('Userdb', Schema)



module.exports = userDb