const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const bcrypt = require('bcrypt');


dotenv.config()

const app = express()
const cors = require("cors")


// jwt
const { generateToken }= require("./utils")

const Auth = require("./Auth")

//MIDDLEWARES
app.use(cors())
app.use(express.static(__dirname + "/static"))
app.use(bodyParser.json())





//USER ROUTES - CONTROLLERS
const User = require("./models/User")

app.get("/profile-img", (req, res) => res.sendFile(__dirname + "/static/profile.jpg"))



app.post("/register", async (req, res) => {
    let { name, email, password } = req.body
    try {
        let hashedPass = await bcrypt.hash(password, 12)
        let user = await new User({ name, email, password: hashedPass }).save()
        
        

        user.password = undefined
        let token = await generateToken({user})
        res.status(201).send({user , token})
    } catch (error) {
        console.log(error);
        res.status(500).send({ error })
    }
})

app.post("/login", async (req, res) => {
    console.log(req.body);
    let {email, password } = req.body
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).send({error:"Invalid email"})
        }
        bcrypt.compare(password, user.password, async (err,same)=>{
            if(same){
                let token = await generateToken({user})
                user.password =undefined
                console.log(user);
                res.status(201).send({user , token})
            }else{
                return res.status(400).send({error:"Incorrect password"})
            }
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ error })
    }
})





//NOTES ROUTES - CONTROLLERS
const Note = require("./models/Note")

app.get("/todos",Auth, async (req, res) => {
    console.log("req.user");
    console.log(req.user);
    try {
        let notes = await Note.find({userId:req.user._id})
        console.log(notes);
        res.status(201).send({ notes })
        
    } catch (error) {
        console.log(error);
    }
    
})

app.post("/add-todo",Auth, async (req, res) => {
    
    const { title, description, type } = req.body.todoData
    const newNote = new Note({ userId:req.user._id, title, description, type })
    let savedNote = await newNote.save()
    console.log(savedNote);
    res.status(201).send({ savedNote })
})



app.listen(1234, (err) => {
    if (!err) {
        console.log("Server running");
        mongoose.connect(process.env.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
            .then(() => {
                console.log("Connected to db");
            }).catch(err => {
                console.log("Could not connect to db");
            })
    }
})