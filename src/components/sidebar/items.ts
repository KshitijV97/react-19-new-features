import { MenuItem } from "../../types";

export const menuItems: MenuItem[] = [
	{
		title: "Comparison",
		path: "/",
		icon: "",
		subItems: [
			{ title: "Passing down ref", path: "/ref" },
			{ title: "use() hook", path: "/use" },
		],
	},
];
