const express = require('express')
const router = express.Router()
const User = require("../models/User")
const bcrypt = require('bcrypt')
const Post = require("../models/Post")
const Comment = require("../models/Comment")
const verifyToken = require('../verifyToken')


//CREATE
router.post("/create", verifyToken, async (req,res) => {
    try {
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(200).json(err)
    }
})
// Update
router.put("/:id", verifyToken, async (req, res) => {
    try {
        
        const updatedUser =  await Post.findByIdAndUpdate(req.params.id,{$set:req.body}, {new:true})
        res.status(200).json(updatedUser)
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)

        res.status(200).json("Post has been deleted!")
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

// GET POST
router.get("/", verifyToken, async (req, res) => {
    const query = req.query
    
    try {
        const searchFilter = {
            title:{$regex:query.search, $options:"i"}
        }
        const posts = await Post.find(query.searc?searchFilter:null)

        res.status(200).json(posts)
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

// GET USER POST
router.get("/user/:userId", verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({userId:req.params.userId})

        res.status(200).json(posts)
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

//SEARCH POST

 
module.exports=router