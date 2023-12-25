"use client";

import { ThemeProvider } from "next-themes";

export function ThemeContext({ children }: { children: JSX.Element | JSX.Element[] }) {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
