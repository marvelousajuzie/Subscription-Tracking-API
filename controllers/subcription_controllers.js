import Subcription from  "../models/subcription.model.js";



export const createSubcription = async (req, res, next) => {
    try {
        const newSubcription = await Subcription.create({
            ...req.body,
            userId: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: "Subcription created successfully",
            data: newSubcription
        });
    } catch (error) {
        next(error);
    }
};