
import { Request, Response } from 'express';
//import { ObjectId } from 'mongoose';
//var ObjectID = require('mongodb').ObjectID;

import jobModel from '../Models/job.model';
import { IJob } from '../interfaces';

const jobController = {

    getJobs: async (req: Request, res: Response) => {
        try {
            const jobs = await jobModel.find();
            res.json(jobs);
        } catch (error) {
            res.status(500).json({ error: 'Error getting jobs' });
        }
    },

    getJobById: async (req: Request, res: Response) => {
        const { id } = req.query;
        try {
            const job = await jobModel.findById(id);
            res.json(job);
        } catch (error) {
            res.status(500).json({ error: 'Error getting job' });
        }
    },

    addJob: async (req: Request, res: Response) => {
        const newJob: IJob = req.body;
        //const { name, location, companyDescription, jobDescription, requierments, status, date } = req.body;
        try {
            //const newU= await jobModel.create({ name, location, companyDescription, jobDescription, requierments, status, date });
            const job = await jobModel.create(newJob);
            res.json(job);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteJob: async (req: Request, res: Response) => {
        try {
            console.log(req.query);
            const { id } = req.query;
            const deleted: IJob | null = await jobModel.findByIdAndRemove(id);
            res.json(deleted);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },
    updateJob: async (req: Request, res: Response) => {
        const { id } = req.query;
        const newJob: IJob = req.body;
        try {
            let changeMe: IJob | undefined | null = await jobModel.findByIdAndUpdate(id/*ObjectID(theidID)*/, newJob);
            //changeMe = newJob;
            res.json(changeMe);
        } catch (e: any) {
            res.status(400).json({ message: e.message });
        }
    }
}
export default jobController;