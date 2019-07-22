const mongoose=require('../connection');
const Shortner=mongoose.Schema;
const shortner=new Shortner({

});
const shortUrl=mongoose.model('shorturls',shortner);
module.exports=shortUrl;