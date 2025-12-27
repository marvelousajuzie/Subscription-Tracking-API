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


export const getUserSubcriptions = async (req, res, next) => {
    try {

        if (req.user.id !== req.user._id) {
            const error = new Error('Not The Account Owner');
            error.statusCode = 403;
            throw error;
        }
        const subcriptions = await Subcription.find({ userId: req.user._id });

        res.status(200).json({
            success: true,
            message: "Subcriptions retrieved successfully",
            data: subcriptions
        });
    } catch (error) {
        next(error);
    }
};