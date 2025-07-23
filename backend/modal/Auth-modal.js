require('dotenv').config()
const mongoose=require('mongoose')
const bycrypt=require(bycryptjs)


const userSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    userId:{
        type:String,
        unique:True
    },
    email:{
        type:String,
        unique:True
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
            const salt=await bycrypt.genSalt(10)
            this.password=await bycrypt.hash(this.password,salt)
            next()
            
        } catch (error) {
            next(err)
            
        }
    }

)

// Method to compare passwords (for login)
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.generateToken = function () {
  const jwt = require('jsonwebtoken');
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const User=mongoose.model('User',userSchema)

module.exports=User