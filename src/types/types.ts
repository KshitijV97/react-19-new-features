export interface SubMenuItem {
	title: string;
	path: string;
}

export interface MenuItem {
	title: string;
	path?: string;
	icon: string;
	subItems?: SubMenuItem[];
}

export interface ExpandedItems {
	[key: string]: boolean;
}

export interface User {
	id: number;
	name: string;
	email: string;
}
