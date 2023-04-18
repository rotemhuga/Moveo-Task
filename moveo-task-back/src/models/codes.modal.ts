import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface ICodeBack {
    title?:string,
    codeContent?: string
}

export const codeSchema = new Schema<ICodeBack>({
    title:{type:String},
    codeContent:{type:String}
}, { suppressReservedKeysWarning: true });
   
export const codeModel = mongoose.model<ICodeBack>("codes", codeSchema);