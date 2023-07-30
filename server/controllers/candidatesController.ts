
import { Request, Response } from 'express';

import candidatesModel from '../Models/candidates.model';
import { ICandidate } from '../interfaces';


const candidatesController = {

    getCandidates: async (req: Request, res: Response) => {
        try {
            const candidates = await candidatesModel.find();
            res.json(candidates);
        } catch (error) {
            res.status(500).json({ error: 'Error getting candidates' });
        }
    },

    getCandidateById: async (req: Request, res: Response) => {
        const { id } = req.query;
        try {
            const candidate = await candidatesModel.findById(id);
            res.json(candidate);
        } catch (error) {
            res.status(500).json({ error: 'Error getting candidate' });
        }
    },

    addCandidate: async (req: Request, res: Response) => {
        const newCandidate: ICandidate = req.body;
        try {
            const candidate = await candidatesModel.create(newCandidate);
            res.json(candidate);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteCandidate: async (req: Request, res: Response) => {
        try {
            console.log(req.query);
            const { id } = req.query;
            const deleted: ICandidate | null = await candidatesModel.findByIdAndRemove(id);
            res.json(deleted);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    updateCandidate: async (req: Request, res: Response) => {
        const { id } = req.query;
        const newCandidate: ICandidate = req.body;
        try {
            const changeMe: ICandidate | undefined | null = await candidatesModel.findByIdAndUpdate(id, newCandidate);
            res.json(changeMe);
        } catch (e: any) {
            res.status(400).json({ message: e.message });
        }
    }
}
export default candidatesController;