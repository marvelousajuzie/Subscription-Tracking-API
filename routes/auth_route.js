import { Router } from "express";
 

const authRouter = Router();

authRouter.get('/sign-up',(req, res) => {
  res.send(body, {title: 'Sign-Up'});
});

authRouter.get('/sign-in',(req, res) => {
  res.send(body, {title: 'Sign-In'});
});


authRouter.get('/sign-out', (req, res) => {
  res.send(body, {title: 'Sign-Out'});
});



export default authRouter;