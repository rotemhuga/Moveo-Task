// import "../LobbyPage/LobbyPage.css";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AllCodesValue, ICode } from "../../store/slices/codesSlice";
// // import { fetchCodes } from "../../store/slices/codesSlice";
// import { IRootState } from "../../store/store";

// const LobbyPage: React.FC = () => {
//   const dispatch = useDispatch();
//   const allCodes: any = useSelector(
//     (state: IRootState) => state.codes.value
//   );
//   const [filteredCodes, setFilteredCodes] = useState<ICode[]>([]);
//   const [data, setData] = useState<any>(null);

// //   useEffect(() => {
// //     dispatch(fetchCodes());
// //   }, [dispatch]);

//   const handleAsyncCode = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/moveoTask/codes", {
//         method: "GET",
//       });
//       const data = await response.json();
//       setData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleRedux = () => {
//     const filtered = allCodes.filter((restObj: ICode) => restObj.title === "try");
//     setFilteredCodes(filtered);
//   };

//   const handleStyleComponent = () => {
//     // implement some styling logic here
//   };

//   return (
//     <div>
//       <h1 className="lobby-title">Lobby Page</h1>
//       <button onClick={handleAsyncCode}>Async code</button>
//       <button onClick={handleRedux}>Redux</button>
//       <button onClick={handleStyleComponent}>Style component</button>
//       {filteredCodes.map((code: ICode) => (
//         <div key={code.title}>
//           <h2>{code.title}</h2>
//           <p>{code.code}</p>
//         </div>
//       ))}
//       <div>{data}</div>
//     </div>
//   );
// };

// export default LobbyPage;


import "../LobbyPage/LobbyPage.css"
import { AllCodesValue, ICode } from "../../store/slices/codesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IRootState } from "../../store/store";
import { ICodeState } from "../../store/store";

const Codes:any = async () => {
    const [data, setData] = useState<any>(null);
	try {
		const response = await fetch("http://localhost:8000/moveoTask/codes", {
			method: "GET",
		});
		const data = await response.json();
        setData(data);
		return data;
	} catch (err) {
		console.log();
	}


// const LobbyPage: React.FC = () => {
    // const dispatch = useDispatch();
    // const allCodes:any = useSelector(
    //     (state:IRootState) => state.codes.value
    // );
    // const filteredCodes = allCodes.filter((restObj:any) => restObj.title === "try")
    // return filteredCodes
    return (
        <div>
            <h1 className="lobby-title">Lobby Page</h1>
            <button>
                Async code
            </button>
            <button>
                Redux
            </button>
            <button>
                style component
            </button>
            <button>
                style component
                {data.title}
            </button>
            <div>{data.title}</div>
        </div>
    )
}
// };
export default Codes

