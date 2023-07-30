export interface IJob {
    id?: Number,
    name: String,
    location?: String,
    companyDescription?: String,
    jobDescription: String,
    requierments: Array<String>,
    status: String,
    date: Date,
}
export interface ICandidate {
    name: String,
    email: String,
    cognitiveScore?: Number,
    personalityFit?: Number,
    rating: Number,
    jobId: String
}