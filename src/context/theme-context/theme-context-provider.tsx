import React from "react";
import { Theme, ThemeContext } from "./theme-context-";

type ThemeProviderProps = {
	children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
}) => {
	const [theme, setTheme] = React.useState<Theme>("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	// No need to write Provider
	return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
