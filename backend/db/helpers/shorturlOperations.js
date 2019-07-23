const shortUrlSchema=require('../models/shortnerSchema');
const basicConfig=require('../../utils/configs/basicConfig');
const shortUrlOperations = {
    async findByLongUrl(longUrl){ 
        return new Promise((resolve,reject)=> {
            shortUrlSchema.findOne({longUrl:longUrl},(err,doc)=> {
                if(err) {
                    reject(err);      
                }
                else {
                    if(doc) {
                        resolve(doc);
                    }
                    else{
                        resolve(basicConfig.NOTFOUND);
                    }
                }
            })
        })
    },
    async createUrl(urlShortObject) {
       return new Promise((resolve,reject)=> {
        shortUrlSchema.create((urlShortObject),(err,doc)=> {
            if(err) {
               reject(err);
            }
            else{
               resolve(doc);    
            }
        });
       });
    },
    async findOrCreateUrl(longUrl,urlShortObject) {
        let initialFind=await this.findByLongUrl(longUrl);
        if(initialFind==basicConfig.NOTFOUND) {
            let createdUrl=await this.createUrl(urlShortObject);
            return createdUrl;
        }
        else{
            return initialFind;
        }
    },
    findByShortId(shortId,res) {
        shortUrlSchema.findOneAndUpdate({shortUrl:shortId},{$inc:{noOfClicks:1}},(err,doc)=> {
            if(err) {
                res.status(500).json({status:basicConfig.ERROR,message:"Error while finding the data "});
            }
            else{
                if(doc) {
                    res.redirect(doc.longUrl);
                }
                else{
                    res.status(404).json({status:basicConfig.NOTFOUND,message:"Url not found"});
                }
            }
        });
    },
    findNumberOfClick(shortId,res) {
        shortUrlSchema.findOne({shortUrl:shortId},"noOfClicks",(err,doc)=> {
            if(err) {
                res.status(500).json({status:basicConfig.ERROR,message:"Error while finding the data "});
            }
            else{
                if(doc) {
                    res.status(200).json({status:basicConfig.SUCCESS,message:"Find out successfully",doc:doc});
                }
                else{
                    res.status(404).json({status:basicConfig.NOTFOUND,message:"Url not found for clicks"});
                }
            }
        });
    }
}
module.exports=shortUrlOperations;