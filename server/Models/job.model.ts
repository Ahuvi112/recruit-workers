
import mongoose from 'mongoose';
import { IJob } from '../interfaces';
//import { ObjectId } from "mongodb";
//import { IJob } from '../interfaces';

const jobModel = new mongoose.Schema<IJob>({

    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: false
    },
    jobDescription: {
        type: String,
        require: true
    },
    companyDescription: {
        type: String,
        require: false
    },
    requierments: {
        type: [String],
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
});

export default mongoose.model<IJob>("jobModel", jobModel);


