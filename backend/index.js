const express=require('express')
const app=express()
const mongoose=require('mongoose') 
const cookieParser=require('cookie-parser')
const cors=require('cors')
const multer=require('multer')
const dotenv=require('dotenv')
const path=require("path")
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')
const port = process.env.PORT || 5000;

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
app.use("/images",express.static(path.join(__dirname, "/images")))
app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)

//imge upload
const storage = multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null, "images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"img.jpg")
    }
})
const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully")
})
app.get('/', (req, res) => {
    res.send('Welcome to your backend server');
  });
app.listen(port,() => {
    connectDB()
    console.log("app is running on port 5000")
})      