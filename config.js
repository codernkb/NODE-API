const mongoose = require('mongoose');
const dbname="aaa2"
mongoose.connect('mongodb://127.0.0.1:27017/'+dbname)
.then(()=>{
    console.log("connection successful with mongodb")
})
.catch(()=>{
    console.log("connection Failed with mongodb")
})