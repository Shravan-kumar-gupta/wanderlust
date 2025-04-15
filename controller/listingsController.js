const Listing = require("../models/listing.js")

module.exports.index = async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings})
}
module.exports.renderNewForm =  (req,res)=> {
    res.render("listings/new.ejs")
}
module.exports.showOneListing = async (req,res)=>{
    let {id} = req.params;
    const listing =await  Listing.findById(id).
    populate({path :"reviews",populate:{
            path : "author",
        }})
        .populate("owner");
    if(!listing){
        req.flash("failure","Listing you requested for dose not exists!");
        res.redirect("/listings");
    }
    console.log(listing)
    res.render("listings/show.ejs",{listing})
}

module.exports.createListing = async (req, res, next) => {
    const { title, description, price, country, location } = req.body.listing;

    // Ensure files were uploaded
    if (!req.files || req.files.length === 0) {
        req.flash("failure", "You must upload at least one image.");
        return res.redirect("/listings/new");
    }

    // Map uploaded files to image objects
    const images = req.files.map(file => ({
        url: file.path,  // Cloudinary stores the image URL in `file.path`
        filename: file.filename
    }));

    // Create new listing
    const newListing = new Listing({
        title,
        description,
        price,
        country,
        location,
        image: images, // Store images as an array
    });

    newListing.owner = req.user._id;
    await newListing.save();

    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
};

module.exports.RenderEditForm = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("failure","Listing you requested for dose not exists!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing})
}
module.exports.UpdateListing = async (req, res, next) => {
    try {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        if (!listing) {
            req.flash("failure", "Listing not found!");
            return res.redirect("/listings");
        }
        // Update listing details (excluding images)
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        req.flash("success", "Listing updated successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
};


module.exports.DestroyListing = async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await  Listing.findByIdAndDelete(id);
    req.flash("success","listing Deleted!");
    res.redirect("/listings");
}
// { $push: { image: { $each: images } } }