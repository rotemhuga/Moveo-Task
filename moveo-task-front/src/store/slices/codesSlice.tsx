import { createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "mongoose";

export interface ICode {
	_id: ObjectId;
	title: string;
	code: string;
}

const dataCodes = fetch("http://localhost:8000/moveoTask/codes")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      return data;
    })
    .catch((err:any) => {
        console.log(err.message);
    });


const codes: any = await dataCodes;
export const codeSlice = createSlice({
	name: "codes",
	initialState: {
		value: codes
	},
	reducers: {
		AllCodesValue: (state) => {
            state.value = state.value;
		},
	},
});

export const { AllCodesValue } = codeSlice.actions;

export default codeSlice.reducer;

    // try {
	// 	const response = await fetch(
	// 		"http://localhost:8000/moveoTask/codes",
	// 		{
	// 			method: "GET",
	// 		}
	// 	);
	// 	const data = await response.json();
    //     console.log(data)
    //     return data;
	// } catch (err) {
	// }