//reads the localStorage and updates documentElement
const autodark = localStorage.getItem("theme");
if (autodark != null) {
    // window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.setAttribute("data-theme", autodark);
}