import {codeModel} from "../models/codes.modal"
import { Request, Response } from "express";

export const getCodes = async () => {
    try {
        const codes = await codeModel.find();
        return codes
    } catch (e) {
        throw Error('Error while Paginating codes')
    }
};