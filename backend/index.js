const express=require('express')
const app=express()
const mongoose=require('mongoose') 
const dotenv=require('dotenv')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')

mongoose.set('strictQuery', false);

// data base
const connectDB=async()=>{
        try {
            await mongoose.connect(process.env.MONGO_URL)
            console.log("Connected to database successfully")
        }
        catch(err){
            console.log(err)
        }
}

dotenv.config()
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.listen(5000,() => {
    connectDB()
    console.log("app is running on port 5000")
})