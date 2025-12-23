import express from 'express';

import {PORT} from './config/env.js';
import UserRouter from './routes/user_route.js';
import SubscriptionRouter from './routes/subcription_route.js';
import authRouter from './routes/auth_route.js';
import connectDB from './database/mongodb.js';
import errormiddleware from './middlewares/error_middleware.js';



const app = express();


app.use(errormiddleware)


app.use('/api/auth', authRouter);
app.use('/api/users', UserRouter);
app.use('/api/subscriptions', SubscriptionRouter);






app.get('/', (req, res) => {
  res.send('Welcome! everyone to my Subcription Tracking App');
});


app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);


  await connectDB();
});


export default app; 