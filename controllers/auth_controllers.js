import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt  from "bcryptjs";
import jwt from "jsonwebtoken";
import {JWT_SECRET, JWT_EXPIRES_IN} from "../config/env.js";




export const signup = async (req, res, next) => {

    const session = await mongoose.startSession();
    session.startTransaction();
    try {

        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error("User already exists");
            error.statuscode = 400;
            throw error;
        }

        //Hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);



        const newUser = await User.create([{
            username: username,
            email: email,
            password: hashedPassword
        }] , {session: session})

         const token = jwt.sign(
            {
                userId: newUser[0]._id},JWT_SECRET,{expiresIn: JWT_EXPIRES_IN},
        );

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            sucess: true,
            message: "User created successfully",
            data: {
                token: token,
                users: newUser[0]
            }
        })

    }
       
    catch (error) { 
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}







export const signin = async (req,  res, next) => {
    try {

        const {email, password} = req.body;

        const user = await User.findOne({ email });

            if (!user) {
          const error = new Error("User not found");
          error.statusCode = 401;
          throw error;
          }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const error = new Error("Invalid credentials");
            error.statuscode = 401;
            throw error;
        }
        
        const token = jwt.sign({ userId: user._id},JWT_SECRET,{expiresIn: JWT_EXPIRES_IN},);
        res.status(200).json({
            sucess: true,
            message: "User signed in successfully",
            data: {
                token,
                user,
            }
        })
    }catch(error) {
        next(error);
    }
}


export const signout = async (req, res, next) => {}