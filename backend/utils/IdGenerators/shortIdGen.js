const shortId=require('shortid');
shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const shortIdGen = {
    genShortId(){ 
        return shortId.generate();
    }
}
module.exports=shortIdGen;