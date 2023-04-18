import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface ICodeBack {
    title?:string,
    code?: string
}

export const codeSchema = new Schema<ICodeBack>({
    title:{type:String},
    code:{type:String}
}, { suppressReservedKeysWarning: true });
   
export const codeModel = mongoose.model<ICodeBack>("codes", codeSchema);