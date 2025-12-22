import { Router } from "express";
 

const authRouter = Router();

authRouter.get(path, '/sign-up', handlers, (req, res) => {
  res.send(body, {title: 'Sign-Up'});
});

authRouter.get(path, '/sign-in', handlers, (req, res) => {
  res.send(body, {title: 'Sign-In'});
});


authRouter.get(path, '/sign-out', handlers, (req, res) => {
  res.send(body, {title: 'Sign-Out'});
});



export default authRouter;