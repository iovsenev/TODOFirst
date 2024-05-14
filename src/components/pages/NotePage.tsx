import Note from "../pages/pageComponents/Note";
import { useEffect, useState } from "react";
import { fetchNotes } from "../../services/notes";
import { IGetNote } from "../../data/models";
import Modal from "../Modal";
import CreateNoteForm from "../forms/CreateNoteForm";
import { GoSortDesc } from "react-icons/go";

export default function NotePage() {
	const [notes, setNotes] = useState<IGetNote[]>([]);
	const [isModal, setIsModal] = useState(false);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const data: IGetNote[] = await fetchNotes();
			setNotes(data);
		};

		fetchData();
	}, []);

	const onRender = async () => {
		const data: IGetNote[] = await fetchNotes();
		setNotes(data);
	};

	return (
		<div className="block w-full ">
			<div className="m-4 flex flex-col  overflow-y-auto h-5/6">
				<div className="flex justify-end w-full px-2">
					<input
						className="w-48 px-2 border-2 rounded-lg"
						type="text"
						value={search}
						placeholder="поиск"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<div>
						<div className="p-2">
							<GoSortDesc />
						</div>
					</div>
				</div>
				{notes.map(
					(note) =>
						note.tittle
							.toLowerCase()
							.includes(search.toLowerCase()) && (
							<Note
								note={note}
								onRender={onRender}
								key={note.id}
							/>
						)
				)}
			</div>
			<div className="flex justify-end">
				<button
					className="py-1.5 px-4 mx-4 rounded-lg bg-gray-200 hover:bg-blue-400 hover:text-white "
					onClick={() => setIsModal(true)}
				>
					создать заметку
				</button>
			</div>
			{isModal && (
				<Modal
					isModal={() => setIsModal((prev) => !prev)}
					nameModal="Создание заметки."
				>
					<CreateNoteForm
						isModal={() => setIsModal((prev) => !prev)}
						onCreate={onRender}
					/>
				</Modal>
			)}
		</div>
	);
}
