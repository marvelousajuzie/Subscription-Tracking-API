import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user_controllers";


const UserRouter = Router();

UserRouter.get('/', getAllUsers);

UserRouter.get('/{id}', getUser);
  res.send({ title: 'Fetch User Details' });


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

