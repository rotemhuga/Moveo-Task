import {codeModel} from "../models/codes.modal"
import { Request, Response } from "express";

export const getCodes = async () => {
    try {
        const codes = await codeModel.find();
        console.log(codes)
        return codes
    } catch (err) {
        throw new Error("Error while retrieving codes: ");
        }
};
  