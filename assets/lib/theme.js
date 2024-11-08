function toggleTheme() {
    let theme = localStorage.getItem("theme");
    if (theme == "dark") {
        setDataThemeLight();
    } else {
        setDataThemeDark();
    }
}

function setDataThemeDark() {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
}

function setDataThemeLight() {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
}

function clearThemeStorage() {
    localStorage.removeItem("theme");
}
// document.documentElement.style.colorScheme = "dark"
