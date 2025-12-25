const errormiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };

        error.message = err.message;
        // Log to console for development
        console.error(err);


        //mongoose bad ObjectId
        if (err.name === 'CastError') {
            const message = `Resource not found`;
            error = new Error(message);
            error.statusCode = 404;
        }

        //mongoose duplicate key
        if (err.code === 11000) {
            const message = `Duplicate field value entered`;
            error = new Error(message);
            error.statusCode = 400;
        }

        //mongoose validation error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map((val) => val.message).join(', ');
            error = new Error(message);
            error.statusCode = 400;
        }

        res.statusCode = (error.statusCode || 500).jsoon({sucess: false, message: error.message || 'Server Error'});

    } catch (error) {
       next(error);
    }
};


export default errormiddleware;