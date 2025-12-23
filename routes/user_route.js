import { Router } from "express";


const UserRouter = Router();

UserRouter.get('/', (req, res) => {
  res.send({ title: 'Fetch all Users' });
});


UserRouter.get('/{id}', (req, res) => {
  res.send({ title: 'Fetch User Details' });
});


UserRouter.post('/', (req, res) => {
  res.send({ title: 'Create a new User' });
});


UserRouter.put('/{id}', (req, res) => {
  res.send({ title: 'Update a User' });
});


UserRouter.delete('/{id}', (req, res) => {
  res.send({ title: 'Delete a User' });
});




export default UserRouter;

