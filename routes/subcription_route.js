import { Router } from "express";



const SubscriptionRouter = Router();



SubscriptionRouter.get('/', (req, res) => {
  res.send({ title: 'Fetch all Subscriptions' });
});


SubscriptionRouter.get('/:id', (req, res) => {
  res.send({ title: 'Fetch a specific Subscription' });
});

SubscriptionRouter.post('/', (req, res) => {
  res.send({ title: 'Create a new Subscription' });
});



SubscriptionRouter.put('/:id', (req, res) => {
  res.send({ title: 'Update a specific Subscription' });
});



SubscriptionRouter.delete('/:id', (req, res) => {
  res.send({ title: 'Delete a specific Subscription' });
});



SubscriptionRouter.get('/user/:id', (req, res) => {
  res.send({ title: 'Fetch a specific user Subscription' });
});



SubscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({ title: 'cancel a Subscription' });
});



SubscriptionRouter.get('/upcoming-renewal', (req, res) => {
  res.send({ title: 'get upcoming renewals' });
});



export default SubscriptionRouter;