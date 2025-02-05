"use client";

import React, { FormEvent, startTransition } from "react";
import { createTodo } from "./utils";

type Todo = {
	id: string;
	title: string;
};

type UseOptimisticExampleProps = {
	initialTodos: Array<Todo>;
};

const UseOptimisticExample = ({ initialTodos }: UseOptimisticExampleProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [todos, setTodos] = React.useState<Todo[]>(initialTodos);
	const [optimisticTodos, setOptimisticTodos] = React.useOptimistic<
		Todo[],
		Todo
	>(todos, (currentTodos, newTodo) => [...currentTodos, newTodo]);

	async function onSubmit(e: FormEvent) {
		e.preventDefault();

		if (inputRef.current === null) return;

		const optimisticTodo: Todo = {
			id: crypto.randomUUID(),
			title: inputRef.current.value!,
		};

		startTransition(() => {
			setOptimisticTodos(optimisticTodo);
		});

		const newTodo = await createTodo(inputRef.current.value);
		setTodos((prev) => [...prev, newTodo]);

	}
	return (
		<form onSubmit={onSubmit}>
			<label>Title</label>
			<br />
			<input ref={inputRef} required />
			<button>Create</button>
			<ul>
				{optimisticTodos.map((todo: Todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</form>
	);
};

export default UseOptimisticExample;
