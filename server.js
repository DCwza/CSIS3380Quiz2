const mongoose = require("mongoose");
const express = require('express');

const app = express();
const port = process.env.PORT || 7000

app.use(express.json());
mongoose.set('strictQuery',true);
const Quizes = require("./Quizes");

mongoose.connect("mongodb+srv://zianw:Pass123!@cluster0.7wtwaje.mongodb.net/Exam?retryWrites=true&w=majority", () =>{console.log("success");});

const createNewQuize = async () =>{
    try{
        const quiz = new Quizes(
            {
                name:"Zi An Wang",
                sid: "300366378",
            }
      );
        await quiz.save();
   } catch (error){console.log(error.message);}
};



app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});

createNewQuize();