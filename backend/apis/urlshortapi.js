const urlRoutes=require('express').Router();
const basicConfig=require('../utils/configs/basicConfig');
const shortUrlObject=require('../models/urlshortmodel');
const shortUrlOperations=require('../db/helpers/shorturlOperations');
urlRoutes.post('/shorturl',(req,res)=> {
    let longUrl=req.body.longUrl;
    console.log(req.body);
    const urlObject = new shortUrlObject(longUrl);
    shortUrlOperations.findOrCreateUrl(longUrl,urlObject).then((data)=> {
        res.status(200).json({status:basicConfig.SUCCESS,message:"Successfully Added ",doc:data});
    }).catch(err=> {
        res.status(500).json({status:basicConfig.ERROR,message:"Error while creating the url ",doc:err});
    });
});
urlRoutes.get('/:shortId',(req,res)=> {
    let shortId=req.params.shortId;
    shortUrlOperations.findByShortId(shortId,res);
});
urlRoutes.get('/find/findNoOfClicks',(req,res)=> {
    let shortId=req.body.shortId;
    shortUrlOperations.findNumberOfClick(shortId,res);
});
module.exports=urlRoutes;