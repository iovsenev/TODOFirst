import { FiSidebar } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";

interface HeaderProps {
	pageName: string;
}

const Header = (props: HeaderProps) => {
	return (
		<header className="border-b-2 p-4 w-full">
			<nav className="flex gap-4 items-center">
				<a href="#">
					<FiSidebar />
				</a>
				<a href="#">
					<FaRegStar />
				</a>
				<a href="#">Аккаунт /</a>
				<a href="#">{props.pageName}</a>
			</nav>
		</header>
	);
};

export default Header;
