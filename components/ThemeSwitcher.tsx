"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { animate, exit, initial, transition } from "utils";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	const toggleTheme = () => {
		setTheme(currentTheme === "dark" ? "light" : "dark");
	};

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				onClick={toggleTheme}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						toggleTheme();
					}
				}}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				aria-label={`Toggle ${currentTheme === "dark" ? "light" : "dark"} theme`}
				style={{ outline: "none" }}
			>
				{currentTheme === "dark" ? <BsSun /> : <BsMoon />}
			</m.button>
		</LazyMotion>
	);
};
