const express=require('express');
const app=express();
app.use(express.static('public'));
const port = process.env.PORT || 1234;
app.listen(port ,(err)=> {
    if(err) {
        console.log("Error while starting the server ");
    }
    else{
        console.log("Server started at port ",port);
    }
});