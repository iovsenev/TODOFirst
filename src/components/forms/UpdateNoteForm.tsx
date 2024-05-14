import { useState } from "react";
import { IGetNote, IUpdateNote } from "../../data/models";
import ErrorMessage from "../pages/pageComponents/ErrorMessage";
import { updateNote } from "../../services/notes";

const noteData: IUpdateNote = {
	id: "",
	tittle: "",
	description: "",
	isCanceled: false,
};

interface CreateNoteProps {
	isModal: () => void;
	onUpdate: () => void;
	note: IGetNote;
}

export default function UpdateNoteForm({
	isModal,
	onUpdate,
	note,
}: CreateNoteProps) {
	const [title, setTittle] = useState(note.tittle);
	const [desc, setDesc] = useState(note.description);
	const [error, setError] = useState("");
	noteData.id = note.id;

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		if (title.trim().length === 0) {
			setError("Необходимо ввести название заметки!");
			return;
		}
		noteData.tittle = title;
		noteData.description = desc;
		noteData.isCanceled = note.isCanceled;

		const response = await updateNote(noteData);

		if (response === 200) {
			isModal();
			onUpdate();
			return;
		}
	};

	return (
		<form className="flex flex-col gap-y-4 " onSubmit={submitHandler}>
			<input
				className="p-2 border-2 border-gray-400 rounded-lg"
				type="text"
				placeholder="Название заметки"
				value={title}
				onChange={(e) => setTittle(e.target.value)}
			/>
			{error && <ErrorMessage message={error} />}
			<textarea
				className="p-2 border-2 border-gray-400 rounded-lg"
				name="описание"
				id=""
				placeholder="Описание заметки"
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			></textarea>
			<button className="bg-green-400 p-2 rounded-lg" type="submit">
				создать
			</button>
		</form>
	);
}
