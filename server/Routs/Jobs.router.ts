import express, { Request, Response } from 'express';

import jobController from '../controllers/jobsController';

const JobsRouter = express.Router();

JobsRouter.get('/getJobs', jobController.getJobs);
JobsRouter.get('/getJobById', jobController.getJobById);
JobsRouter.post('/addJob', jobController.addJob);
JobsRouter.put('/updateJob', jobController.updateJob);
JobsRouter.delete('/deleteJob', jobController.deleteJob);


export default JobsRouter;