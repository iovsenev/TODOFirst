import { MdOutlineCheck } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IGetNote, IUpdateNote } from "../../../data/models";
import { useState } from "react";
import moment from "moment";
import { deleteNote, updateNote } from "../../../services/notes";
import Modal from "../../Modal";
import UpdateNoteForm from "../../forms/UpdateNoteForm";

interface NoteProps {
	note: IGetNote;
	onRender: () => void;
}

const Note = ({ note, onRender }: NoteProps) => {
	const [isDescr, setIsDescr] = useState(false);
	const [onUpdate, setOnUpdate] = useState(false);

	const date = moment(note.addedDate).format("lll");

	const deleteNoteHandler = async () => {
		const response = await deleteNote(note.id);

		if (response === 200) {
			onRender();
			return;
		}
	};

	const updateNoteHandler = async () => {
		const noteUpdated: IUpdateNote = {
			id: note.id,
			tittle: note.tittle,
			description: note.description,
			isCanceled: !note.isCanceled,
		};

		const response = await updateNote(noteUpdated);
		if (response === 200) {
			onRender();
		}
	};

	return (
		<div className="flex flex-col w-full h-auto bg-gray-100 rounded-xl p-4 mt-4 items-center space-x-3">
			<div className="flex w-full mb-2 space-x-3">
				<button
					className={
						note.isCanceled
							? "flex-none w-6 h-6 p-1 rounded-md bg-green-300 hover:bg-blue-300"
							: "flex-none w-6 h-6 p-1 rounded-md bg-white hover:bg-blue-300"
					}
					onClick={updateNoteHandler}
				>
					{note.isCanceled && <MdOutlineCheck />}
				</button>
				<h3
					className={
						note.isCanceled
							? "flex-initial w-full pl-2 line-through"
							: "flex-initial w-full pl-2 "
					}
				>
					{note.tittle}
				</h3>
				{note.isCanceled && <p className="text-gray-400">Завершено</p>}
				<button
					className="flex-none p-1 hover:bg-blue-300"
					onClick={() => setIsDescr((prev) => !prev)}
				>
					{isDescr ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</button>

				<button
					className="flex-none p-1 rounded-md bg-white hover:bg-blue-300"
					onClick={() => setOnUpdate(true)}
				>
					<MdModeEditOutline />
				</button>
				<button
					className="flex-none p-1 rounded-md bg-red-300"
					onClick={deleteNoteHandler}
				>
					<RiDeleteBin6Line />
				</button>
			</div>
			{isDescr && <p>{note.description}</p>}
			<p className=" text-right text-xs w-full -mb-3 text-gray-300 ">
				{date}
			</p>
			{onUpdate && (
				<Modal
					isModal={() => setOnUpdate((prev) => !prev)}
					nameModal="Изменение заметки"
				>
					<UpdateNoteForm
						isModal={() => setOnUpdate((prev) => !prev)}
						onUpdate={onRender}
						note={note}
					/>
				</Modal>
			)}
		</div>
	);
};

export default Note;
