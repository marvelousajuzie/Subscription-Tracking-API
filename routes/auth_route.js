import { Router } from "express";
import {  signup, signin,signout} from "../controllers/auth_controllers.js"



 

const authRouter = Router();

authRouter.get('/sign-up', signup);

authRouter.get('/sign-in', signin);

authRouter.get('/sign-out', signout);


export default authRouter;