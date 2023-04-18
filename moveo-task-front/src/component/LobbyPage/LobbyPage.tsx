import "../LobbyPage/LobbyPage.css"
import { AllCodesValue, ICode } from "../../store/slices/codesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IRootState } from "../../store/store";
import { ICodeState } from "../../store/store";

// const Codes:any = async () => {
//     const [data, setData] = useState<any>(null);
// 	try {
// 		const response = await fetch("http://localhost:8000/moveoTask/codes", {
// 			method: "GET",
// 		});
// 		const codesData = await response.json();
//         setData(codesData);
// 		return codesData;
// 	} catch (err) {
// 		console.log();
// 	}


const LobbyPage: React.FC = () => {
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
            </button>
            {/* <div>{allCodes}</div> */}
        </div>
    )
}
export default LobbyPage

