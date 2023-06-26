import mongoose, { Document } from "mongoose";

export interface IJob extends Document {
    name: string,
    location?: string,
    companyDescription?: string,
    jobDescription: string,
    requierments: Array<String>,
    status: boolean,
    date: Date,
}