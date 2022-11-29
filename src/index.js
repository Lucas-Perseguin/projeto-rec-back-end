import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pollsRouter from './routes/polls.routes.js';
import choicesRouter from './routes/choices.routes.js';

//config
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(pollsRouter);
app.use(choicesRouter);

//turn server on
app.listen(process.env.PORT, () => {
  console.log(`Server runnig in port ${process.env.PORT}`);
});
