const joi = require('joi')
const Joi = require("joi");
const {forbidden} = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),

        // Allow images to be optional for updates
        image: Joi.alternatives().try(
            Joi.array().items(
                Joi.object({
                    url: Joi.string().uri().required(),
                    filename: Joi.string().required()
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
// image : joi.string().allow("",null),

