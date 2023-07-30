import express from 'express';

import candidatesController from '../controllers/candidatesController';

const CandidatesRouter = express.Router();

CandidatesRouter.get('/getCandidates', candidatesController.getCandidates);
CandidatesRouter.get('/getCandidateById', candidatesController.getCandidateById);
CandidatesRouter.post('/addCandidate', candidatesController.addCandidate);
CandidatesRouter.put('/updateCandidate', candidatesController.updateCandidate);
CandidatesRouter.delete('/deleteCandidate', candidatesController.deleteCandidate);


export default CandidatesRouter;