import { MenuItem } from "../../types";

export const menuItems: MenuItem[] = [
	{
		title: "Comparison",
		path: "/",
		icon: "",
		subItems: [
			{ title: "Passing down ref", path: "/ref" },
			{ title: "use() hook", path: "/use" },
			{ title: "useFormStatus", path: "/use-form-status" },
			{ title: "useOptimistic", path: "/use-optimistic" },
		],
	},
];
