import SideBar from "./components/SideBar";
import Header from "./components/Header";
import NotePage from "./components/pages/NotePage";
import MainPage from "./components/pages/MainPage";
import { useState } from "react";
NotePage;

function App() {
	const [page, setPage] = useState("Главная");
	function changePage(pageName: string) {
		setPage(pageName);
	}

	function renderSwitch(pageName: string) {
		switch (pageName.toLowerCase()) {
			case "главная":
				return <MainPage />;
			case "заметки":
				return <NotePage />;
		}
	}

	return (
		<>
			<SideBar namePage={changePage} />
			<div className="block w-10/12 max-w-full">
				<Header pageName={page} />
				{renderSwitch(page)}
			</div>
		</>
	);
}

export default App;
