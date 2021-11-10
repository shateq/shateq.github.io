// Simple dark mode toggle script! Use with pair of style.css.
document.addEventListener("DOMContentLoaded", () => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.id = "switch";
    div.appendChild(p);
    document.body.appendChild(div);

    p.onclick = () => {
        document.body.classList.toggle("dark");
        p.classList.toggle("sun");   
    }
}, false);