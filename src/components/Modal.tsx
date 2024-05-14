import { IoClose } from "react-icons/io5";

interface ModalProps {
	children: React.ReactNode;
	isModal: () => void;
	nameModal: string;
}

const Modal = ({ children, isModal, nameModal }: ModalProps) => {
	return (
		<>
			<div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" />
			<div className="w-[500px] p-4 rounded bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
				<h3 className="text-center font-bold text-2xl align-middle pb-3">
					{nameModal}
				</h3>
				<button
					className="fixed right-2 top-2 p-1 rounded-xl hover:bg-gray-200"
					onClick={isModal}
				>
					<IoClose />
				</button>
				{children}
			</div>
		</>
	);
};

export default Modal;
