
import mongoose from 'mongoose';
import { ICandidate } from '../interfaces';


const candidatesModel = new mongoose.Schema<ICandidate>({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cognitiveScore: {
        type: Number,
        require: false
    },
    personalityFit: {
        type: Number,
        require: false
    },
    rating:{
        type: Number,
        require: true
    },
    jobId: {
        type: String,
        require: true
    }
});

export default mongoose.model<ICandidate>("candidatesModel", candidatesModel);