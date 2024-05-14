import { useState } from "react";
import { ICreateNote } from "../../data/models";
import ErrorMessage from "../pages/pageComponents/ErrorMessage";
import { createNote } from "../../services/notes";

const noteData: ICreateNote = {
	tittle: "",
	description: "",
};

interface CreateNoteProps {
	isModal: () => void;
	onCreate: () => void;
}

export default function CreateNoteForm({ isModal, onCreate }: CreateNoteProps) {
	const [title, setTittle] = useState("");
	const [desc, setDesc] = useState("");
	const [error, setError] = useState("");

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		if (title.trim().length === 0) {
			setError("Необходимо ввести название заметки!");
			return;
		}
		noteData.tittle = title;
		noteData.description = desc;

		const response = await createNote(noteData);

		if (response === 200) {
			isModal();
			onCreate();
			return;
		}
	};

	return (
		<form className="flex flex-col gap-y-4 " onSubmit={submitHandler}>
			<input
				className="p-2 border-2 border-gray-400 rounded-lg"
				type="text"
				placeholder="Название заметки"
				value={title ?? ""}
				onChange={(e) => setTittle(e.target.value)}
			/>
			{error && <ErrorMessage message={error} />}
			<textarea
				className="p-2 border-2 border-gray-400 rounded-lg"
				name="описание"
				id=""
				placeholder="Описание заметки"
				value={desc ?? ""}
				onChange={(e) => setDesc(e.target.value)}
			></textarea>
			<button className="bg-green-400 p-2 rounded-lg" type="submit">
				создать
			</button>
		</form>
	);
}
