import React from "react";
interface TextInputProps {
	inputRef: (ref: HTMLInputElement | null) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ inputRef }) => {
	return (
		<input type='text' ref={inputRef} placeholder='Type something here...' />
	);
};
