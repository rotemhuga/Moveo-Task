import { ICode } from "./slices/codesSlice";

export interface IRootState {
	codes: ICodeState;
}

export interface ICodeState {
	value: ICode[];
}