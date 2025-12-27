import {JWT_SECRET} from "../config/env.js";


const authorize = (req, res, next) => {
    try {

        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) return res.status(401).json({message: 'unauthorized, no token'});

        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = { id: decoded.userId };

        next();


    } catch (error) {
        res.status(401).json({message: 'unauthorized', error: error.message});
    }
}