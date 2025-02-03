import React from "react";
import { TextInput } from "./text-input";

export const RefExample = (): React.JSX.Element => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	const onClick = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}

		alert(inputRef?.current?.value);
	};

	return (
		<div>
			<TextInput inputRef={(el) => (inputRef.current = el)} />
			<button onClick={onClick}>Submit</button>
		</div>
	);
};
