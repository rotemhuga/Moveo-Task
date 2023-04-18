import "../LobbyPage/LobbyPage.css"
import { AllCodesValue, ICode } from "../../store/slices/codesSlice";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { ICodeState } from "../../store/store";


// const codes:any = async () => {
// 	try {
// 		const response = await fetch("http://localhost:8000/moveoTask/codes", {
// 			method: "GET",
// 		});
// 		const data = await response.json();
//         console.log(data)
// 		return data;
// 	} catch (err) {
// 		console.log();
// 	}
// };

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
                {/* {allDishes} */}
            </button>
        </div>
    )
}

export default LobbyPage

