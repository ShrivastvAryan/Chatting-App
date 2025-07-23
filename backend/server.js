const express=require('express')
const app=express()
const PORT=4000
const mongoDb=require('./db')
const authrouter=require('./router/Auth-router')

app.use(express.json())
app.use(cors())

mongoDb.connect()

app.use('/api/auth',authrouter)

app.get('/',(req,res)=>{
    res.send('Express app is running!');
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running at ${PORT}`)
    }
    else{
        console.log('Error in connecting with the server')
    }
})