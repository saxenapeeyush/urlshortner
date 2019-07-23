const mongoose=require('../connection');
const Shortner=mongoose.Schema;
const shortner=new Shortner({
        shortUrl:{type:String},
        longUrl:{type:String},
        noOfClicks:{type:Number,default:0}
});
const shortUrl=mongoose.model('shorturls',shortner);
module.exports=shortUrl;