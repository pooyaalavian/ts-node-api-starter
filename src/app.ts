import express, { Application } from 'express';
import cors from 'cors';
import { router } from './router';
export const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {res.setHeader('Access-Control-Expose-Headers', 'Authorization'); next();});

app.use(router);
