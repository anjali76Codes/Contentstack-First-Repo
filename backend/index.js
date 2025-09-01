import express from "express";
import dotenv from "dotenv";

dotenv.config();






const app = express();
const PORT = process.env.PORT || 5000


// middleware to handle the json requests
app.use(express.json());


// use cors to allow requests from frontend 
// app.use(cors());

app.get('/' , (req, res)=>{
    res.send("Welcome to First Repo !")
})




app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})