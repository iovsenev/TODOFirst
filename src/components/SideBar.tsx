interface ISideBarProps {
	namePage: (namePage: string) => void;
}

const SideBar = ({ namePage }: ISideBarProps) => {
	return (
		<aside className="h-full border-r-2  w-2/12">
			<div className="p-4  border-b-2 items-center">
				<h1 className="font-sans">IO Work Space</h1>
			</div>
			<nav className="grid m-2">
				<h3 className="m-4 border-b-2">Аккаунт</h3>
				<button
					className="p-4 rounded-lg text-left hover:bg-gray-100"
					onClick={() => namePage("Главная")}
				>
					Главная
				</button>
				<button
					className="p-4 rounded-lg text-left hover:bg-gray-100"
					onClick={() => namePage("Заметки")}
				>
					Заметки
				</button>
				<button
					className="p-4 rounded-lg text-left hover:bg-gray-100"
					onClick={() => namePage("Личные Дела")}
				>
					Личные Дела
				</button>
			</nav>
		</aside>
	);
};

export default SideBar;
