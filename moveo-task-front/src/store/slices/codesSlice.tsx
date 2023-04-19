import { createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "mongoose";

export interface ICode {
	_id: ObjectId;
	title: string;
	code: string;
}

const getData = await fetch("http://localhost:8000/moveoTask/codes")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err:any) => {
        console.log(err.message);
    });

const allCodesValue:any = await getData;
console.log(allCodesValue)

export const codesSlice = createSlice({
    name: "codes",
    initialState: {
      value: allCodesValue,
    },
    reducers: {
      codePageFilter: (state, action) => {
      state.value = state.value;
        // switch (filterType){
        //   case "all":
        //       state.value = code
        //       break;
        //   case "new":
        //       state.value = code
        //       state.value = state.value.filter(
        //           (code:any) => code.title === "redux"); 
        //       break;
        //   default:
        //   state.value = state.value;
        // }
      }
  }
  })
  
  export const { codePageFilter } = codesSlice.actions;
  export default codesSlice.reducer;



// const dataCodes = async () => {
// 	try {
// 		const response = await fetch(
// 			"http://localhost:8000/moveoTask/codes",
// 			{
// 				method: "GET",
// 			}
// 		);
// 		const codesData = await response.json();
// 		return codesData;
// 	} catch (err) {
// 	}
// };
// const codes: ICode[] = await dataCodes();
// export const CodeSlice = createSlice({
// 	name: "codes",
// 	initialState: {
// 		value: codes,
// 		// filteredValue: {},
// 	},
// 	reducers: {
// 		AllCodesValue: (state) => {
// 			state.value = state.value;
// 		},
// 	},
// });

// export const { AllCodesValue } = CodeSlice.actions;

// export default CodeSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { ObjectId } from "mongoose";

// export interface ICode {
// 	_id: ObjectId;
// 	title: string;
// 	code: string;
// }

// const dataCodes = fetch("http://localhost:8000/moveoTask/codes")
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((err:any) => {
//         console.log(err.message);
//     });


// const codes: any = await dataCodes;
// export const codeSlice = createSlice({
// 	name: "codes",
// 	initialState: {
// 		value: codes
// 	},
// 	reducers: {
// 		AllCodesValue: (state) => {
//             state.value = state.value;
// 		},
// 	},
// });

// export const { AllCodesValue } = codeSlice.actions;

// export default codeSlice.reducer;

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