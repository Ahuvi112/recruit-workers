import express from 'express';
const bodyParser= require('body-parser');
import cors from 'cors';
//import bodyParser from 'body-parser';
//const express =require('express');

import connectDB from './DB';
import JobsRouter from './Routs/Jobs.router';
import CandidateRouter from './Routs/candidates.router';


const app = express();
const port = 4000;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/Jobs',JobsRouter);
app.use('/Candidates',CandidateRouter);


connectDB();

app.listen(port, ():void => {
    console.log('well');
 });