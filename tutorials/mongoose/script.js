const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()

async function run() {
  try{
    const user = await User.findOne({name: "Kyle", })
    await user.save();
    console.log(user);
    console.log(user.namedEmail)
  }catch(error){
    console.log(error.message)
  }
  
} 

