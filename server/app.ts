import express,{Request,Response} from 'express';
//import bodyParser from 'body-parser';
//const express =require('express');
const bodyParser= require('body-parser');
import connectDB from './DB';
import JobsRouter from './Routs/Jobs.router';


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/JobsRouter',JobsRouter);

connectDB();

app.listen(port, ():void => {
    console.log('well');
 });