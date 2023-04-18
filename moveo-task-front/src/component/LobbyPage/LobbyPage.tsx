import "../LobbyPage/LobbyPage.css"

const codes:any = async () => {
	try {
		const response = await fetch("http://localhost:8000/codes", {
			method: "GET",
		});
		const data = await response.json();
		return data;
	} catch (err) {
		console.log();
	}
};

const LobbyPage: React.FC = () => {
    return (
        <div>
            <h1 className="lobby-title">Lobby Page</h1>
            <button>
                {codes}
            </button>
        </div>
    )
}

export default LobbyPage