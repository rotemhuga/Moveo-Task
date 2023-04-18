import express from 'express';
import {getAllCodes} from "../controllers/codes.controllers"

const answersRouter = express.Router();
const middleWare = require('../../middleWare/IsAdmin');
answersRouter.get('/codes', getAllCodes);

export default answersRouter;
