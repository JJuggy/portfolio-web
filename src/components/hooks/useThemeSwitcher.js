import React, {useEffect, useState} from "react";

const useThemeSwitcher = () => {
	const preferDarkQuery = "(prefers-color-scheme: dark)";
	const [mode, setMode] = useState("");

	useEffect(() => {
		const mediaQuery = window.matchMedia(preferDarkQuery);
		const userPreference = window.localStorage.getItem("theme");
		const handleChange = () => {
			if (userPreference) {
				let check = userPreference === "dark" ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.body.classList.add("dark");
				} else {
					document.body.classList.remove("dark");
				}
			} else {
				let check = mediaQuery.matches ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.body.classList.add("dark");
				} else {
					document.body.classList.remove("dark");
				}
			}
		};
		handleChange();
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	useEffect(() => {
		// Update the body class and save the theme mode to local storage
		if (mode === "dark") {
			document.body.classList.add("dark");
			window.localStorage.setItem("theme", "dark");
		}
		if (mode === "light") {
			document.body.classList.remove("dark");
			window.localStorage.setItem("theme", "light");
		}
	}, [mode]);

	return [mode, setMode];
};

export default useThemeSwitcher;
