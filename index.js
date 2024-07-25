const express = require("express")
const axios = require("axios")
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./controller/route")

// Connection with the Mongo Db Schema 

// Connection with the Mongo DB 
try {
    mongoose.connect( `mongodb://localhost:27017/myapp`,{
        useNewurlParser : true 
    });
    console.log("Connection with Mongo DB Success Full ");

}
catch(error){
    console.error(`Connection Not Marked ${error.message}`)
}


app.use('/' , userRoutes );
// So all the Request starting with the {/} will be directed to  the user routes 


// Server Running 
app.listen(3000, () =>{
    console.log("server is running  on port 3000")
})



