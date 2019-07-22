const mongoose =require('mongoose');
const dbConfig=require('../utils/configs/dbConfig');
mongoose.connect(dbConfig.dbConfigUrl,(err)=> {
    if(err) {
        console.log("Error while connecting to database ");
    }
    else{
        console.log("Connected to database successfully");
    }
});
module.exports=mongoose;