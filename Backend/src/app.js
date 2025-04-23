import express, { urlencoded } from 'express';
import passport from 'passport';
import AuthRouter from './routes/auth.route.js'
import cors from 'cors';

const app = express();
app.use(cors())
app.use(passport.initialize())
app.use(express.json())
app.use(urlencoded({extended:true}))

app.use('/api/auth', AuthRouter)


export default app;