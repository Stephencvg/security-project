const { default: mongoose } = require('mongoose');
const mngoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose.connect('mongodb+srv://Stephen11:stephen@cluster0.q3lewcu.mongodb.net/userDB', {
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    console.log('connected to database')
  } catch (error) {
    console.log(error);
    console.log('connection failed')
    process.exit(1)
  }
}

module.exports = connectDB