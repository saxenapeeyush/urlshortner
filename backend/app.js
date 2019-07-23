const express=require('express');
const app=express();
// const cors=require('cors');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
// app.use(cors);
app.use(express.static('public'));
const port = process.env.PORT || 1234;
app.use('/',require('./apis/urlshortapi'));
app.listen(port ,(err)=> {
    if(err) {
        console.log("Error while starting the server ");
    }
    else{
        console.log("Server started at port ",port);
    }
});