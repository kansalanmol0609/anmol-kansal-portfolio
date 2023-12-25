export type MenuOption = {
	id: number;
	name: string;
	url: string;
};

export const MENU_OPTIONS: Array<MenuOption> = [
	{ id: 0, name: "Intro", url: "#intro" },
	{ id: 1, name: "About", url: "#about" },
	{ id: 4, name: "Skills", url: "#tech" },
	{ id: 2, name: "Experience", url: "#experience" },
	{ id: 3, name: "Projects", url: "#projects" },
	{ id: 5, name: "Education", url: "#education" }
];
