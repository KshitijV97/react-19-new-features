import React from "react";

export type Theme = "light" | "dark";

type ThemeContext = {
	theme: Theme;
	toggleTheme?: () => void;
};

export const ThemeContext = React.createContext<ThemeContext | undefined>(
	undefined
);
