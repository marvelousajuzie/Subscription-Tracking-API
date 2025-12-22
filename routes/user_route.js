import { Router } from "express";


const UserRouter = Router();

UserRouter.get('/users', (req, res) => {
  res.send({ title: 'Fetch all Users' });
});


UserRouter.get('/users/{id}', (req, res) => {
  res.send({ title: 'Fetch User Details' });
});


UserRouter.post('/users', (req, res) => {
  res.send({ title: 'Create a new User' });
});


UserRouter.put('/users/{id}', (req, res) => {
  res.send({ title: 'Update a User' });
});


UserRouter.delete('/users/{id}', (req, res) => {
  res.send({ title: 'Delete a User' });
});




export default UserRouter;

