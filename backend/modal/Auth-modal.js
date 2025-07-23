require('dotenv').config()
const mongoose=require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    userId:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    userimage_url:{
        type:String
    }
})

//integrating the bycrypt here

userSchema.pre('save',async function (next) {
    if(!this.isModified){
        return next()   
    
}
   try {
            const salt=await bcrypt.genSalt(10)
            this.password=await bcrypt.hash(this.password,salt)
            next()
            
        } catch (error) {
            next(error)
            
        }
    }

)

// Method to compare passwords (for login)
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = function () {
  const jwt = require('jsonwebtoken');
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const User=mongoose.model('User',userSchema)

module.exports=User