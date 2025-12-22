import { Router } from "express";



const SubscriptionRouter = Router();



SubscriptionRouter.get('/subscriptions', (req, res) => {
  res.send({ title: 'Fetch all Subscriptions' });
});


SubscriptionRouter.get('/subscriptions/:id', (req, res) => {
  res.send({ title: 'Fetch a specific Subscription' });
});

SubscriptionRouter.post('/subscriptions', (req, res) => {
  res.send({ title: 'Create a new Subscription' });
});



SubscriptionRouter.put('/subscriptions/:id', (req, res) => {
  res.send({ title: 'Update a specific Subscription' });
});



SubscriptionRouter.delete('/subscriptions/:id', (req, res) => {
  res.send({ title: 'Delete a specific Subscription' });
});



SubscriptionRouter.get('/subscriptions/user/:id', (req, res) => {
  res.send({ title: 'Fetch a specific user Subscription' });
});



SubscriptionRouter.put('/subscriptions/:id/cancel', (req, res) => {
  res.send({ title: 'cancel a Subscription' });
});



SubscriptionRouter.get('/subscriptions/upcoming-renewal', (req, res) => {
  res.send({ title: 'get upcoming renewals' });
});



export default SubscriptionRouter;