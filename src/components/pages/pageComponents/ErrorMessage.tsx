interface Imessage {
	message: string;
}

export default function ErrorMessage({ message }: Imessage) {
	return (
		<>
			<p className="text-xl text-red-500">{message}</p>
		</>
	);
}
