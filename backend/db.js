require('dotenv').config();
const mongoose=require('mongoose')
const URI=process.env.MONGODB_URI

const mongoConnection=async()=>{
    try {
        await mongoose.connect(URI)
        console.log('Mongo Connected')
    } catch (error) {
        console.error('Mongo Db connection failed',error.message)
    }
}

module.exports=mongoConnection