const joi = require('joi')
const {forbidden} = require("joi");

module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        location: joi.string().required(),
        country: joi.string().required(),
        price: joi.number().required().min(0),

        // Allow images to be optional for updates
        image: joi.alternatives().try(
            joi.array().items(
                joi.object({
                    url: joi.string().uri().required(),
                    filename: joi.string().required()
                })
                .min(0)
                .allow(null)
            ),
        )
    }).required()
});
module.exports.reviewSchema  =  joi.object({
    review : joi.object({
        rating : joi.number().required().min(1).max(5),
        comment : joi.string().required(),

    }).required()
})
<<<<<<< HEAD
=======
// image : joi.string().allow("",null),
>>>>>>> 21bac896e0361c20a24e6c3ebee173b60ea5ae16

