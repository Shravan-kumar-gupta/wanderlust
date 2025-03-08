const mongoose  = require("mongoose");
const Schema  = mongoose.Schema;
const Review   = require("./review.js");
// const User = require("./user.js");

const listingSchema = new Schema({
     title : {
         type: String,
         required: true
     },
    description : {
       type: String,
       required: true
    },
    image: [
        {
            url: {
                type: String,
                required: true
            },
            filename: {
                type: String,
                default:"listing_image",
            }
        }
    ],
    price :{
       type: Number,
       required: true
    },
    location :{
        type: String,
        required: true
    },
    country : {
       type: String,
       required: true
    },
    reviews :
    [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
    owner :{
         type : Schema.Types.ObjectId,
         ref : "User",
    },
    // category:{
    //      type :String,
    //     enum:["mountains","arctic","farms","deserts"]
    // }
})
listingSchema.post("findOneAndDelete",async (req,res)=>{
    if(listing) {
        await Review.deleteMany({_id : {$in : listing.reviews}})
    }
});
const listing = mongoose.model("Listing",listingSchema);
module.exports = listing;
