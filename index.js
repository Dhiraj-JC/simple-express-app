const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config('./env')

const app = express();
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT, () => {
    console.log('Server is listening on ' + process.env.PORT)
})