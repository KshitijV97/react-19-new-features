export function wait<T>(value: T, duration: number) {
	return new Promise<T>((resolve) => {
		setTimeout(() => resolve(value), duration);
	});
}

export function createTodo(title: string) {
	return wait(
		{ id: crypto.randomUUID(), title: `${title} - Processed value` },
		2000
	);
}
