"use client";

import { useFormStatus } from "react-dom";

const Button: React.FC = (): React.ReactElement => {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
	);
};

const sayHello = (name: FormDataEntryValue | null): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(`Hello ${name}`), 2000);
	});
};

const UseFormStatus = () => {
	async function formAction(formData: FormData) {
		const name = formData.get("name");
		return sayHello(name).then((greeting) => {
			alert(greeting);
		});
	}

	return (
		<form action={formAction}>
			<h1>Greeting form</h1>
			<label htmlFor='name'>
				Enter name
				<input type='text' name='name' />
			</label>
			<Button />
		</form>
	);
};

export default UseFormStatus;
