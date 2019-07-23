const shortIdGen=require('../utils/IdGenerators/shortIdGen');
class urlShortner{
    constructor(longUrl) {
        this.longUrl=longUrl;
        this.shortUrl=shortIdGen.genShortId();
    }
}
module.exports=urlShortner;