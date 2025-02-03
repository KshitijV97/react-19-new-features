import React from "react";
import { ThemeContext } from "../../context/theme-context/theme-context-";

type Post = {
	id: string;
	userId: string;
	title: string;
	body: string;
};

const fetchPosts: Promise<Post[]> = fetch(
	"https://jsonplaceholder.typicode.com/posts"
).then((res) => res.json());

const Loader = () => (
	<div
		style={{
			width: "100%",
			minHeight: "100vh",
			fontSize: "96px",
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		Loading...
	</div>
);

const Post = ({ post }: { post: Post }) => (
	<div style={{ marginBottom: "2rem" }}>
		<h1>{post.title}</h1>
		<p>{post.body}</p>
	</div>
);

const Posts = () => {
	const posts = React.use(fetchPosts);
	const themeContext = React.use(ThemeContext);

	return (
		<div
			style={{
				backgroundColor:
					themeContext?.theme === "light" ? " #d6eaf8" : " #34495e ",
				color: themeContext?.theme === "light" ? "#000000" : "#FFFFFF",
			}}
		>
			<button onClick={themeContext?.toggleTheme}>Toggle theme</button>
			{posts.map((post) => (
				<Post post={post} key={post.body} />
			))}
		</div>
	);
};

export const UseExample = () => {
	return (
		<React.Suspense fallback={<Loader />}>
			<Posts />
		</React.Suspense>
	);
};
