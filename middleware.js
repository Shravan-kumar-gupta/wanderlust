const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
// const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
module.exports.isLoggedIn = (req, res,next) => {
    // console.log(req)
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("failure","You must be logged in !")
        return res.redirect("/login");
    }
    next();
}
module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}
module.exports.isOwner =
    async (req,res,next) => {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        if (!listing.owner.equals(res.locals.currentUser._id)) {
            req.flash("failure", "You do not have permission to do that!");
            return res.redirect(`/listings/${listing._id}`);
        }
        next();
}
module.exports.isReviewAuthor = wrapAsync(
    async (req,res,next) => {
        let {id,reviewId} = req.params;
        let review  = await Review.findById(reviewId);
        if(!review.author.equals(res.locals.currentUser._id)){
            req.flash("failure","You are not the author of this review!")
            return res.redirect(`/listings/${id}`);
        }
        next();
    }
)