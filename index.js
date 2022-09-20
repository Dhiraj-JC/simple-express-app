const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongo = require('mongodb').MongoClient;

dotenv.config('./env')

const app = express();
app.use(express.json())
app.use(cors())



const url = "mongodb+srv://admin:admin%40123@cluster0.2za6crn.mongodb.net/?retryWrites=true&w=majority";

let db;
let students;

mongo.connect(url, {useNewUrlParser: true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        console.log(error);
        return;
    }
    db = client.db('StudentDatabase');   
    students = db.collection('Students');
});

app.post('/students',(req,res)=> {
    let student = req.body;
    students.insertOne(student,(error, result)=> {
        if(error) {
            console.error(error);
            res.status(500).json({error: error});
        } else {
            res.status(201).json({result: result});
        }
    });
});

app.get('/students',(req,res)=> {
    res.json({result: 'Hi everyone from heroku'})
});

app.get('/students/:studentId',(req,res)=> {

});

app.put('/students',(req,res)=> {

});

app.delete('/students/:studentId',(req,res)=> {

});



app.listen(process.env.PORT, () => {
    console.log('Server is listening on ' + process.env.PORT)
})
