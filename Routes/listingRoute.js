const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../Schema.js")
const {isLoggedIn,isOwner} = require("../middleware.js")
const listingController = require("../controller/listingsController.js")
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage})

// const upload = multer({ storage} );
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

router
    .route("/")
    .get(                    // Index Route
        wrapAsync(listingController.index)
    )
    .post(isLoggedIn,       //Create Route
        upload.array('listing[image]'),(req, res, next) => {
            // Convert uploaded images into the expected format
            if (req.files) {
                req.body.listing.image = req.files.map(file => ({
                    url: file.path, // Cloudinary stores the image URL in `file.path`
                    filename: file.filename
                }));
            }
            next(); // Proceed to validation
        },
        validateListing,
        wrapAsync(listingController.createListing)
    )
  // New Route :
  router.get("/new",
    isLoggedIn,
    listingController.renderNewForm
  )

router
    .route("/:id")
    .get(                         //Show Route
        wrapAsync(listingController.showOneListing)
    )
    .put(                       //Update Route
        isLoggedIn,
        isOwner,
        validateListing,
        wrapAsync(listingController.UpdateListing)
    )
    .delete(   //Delete Route
        isOwner,
        isLoggedIn,
        wrapAsync(listingController.DestroyListing)
    )

// Edit Route
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.RenderEditForm)
)
module.exports = router;