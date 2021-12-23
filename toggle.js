let p = document.createElement("p");
p.id = "switch";
document.body.appendChild(document.createElement("div").appendChild(p));

if (localStorage.getItem("dark") == true.toString()) {
    document.body.classList.toggle("dark");
    p.classList.toggle("sun");
}

p.onclick = () => {
    document.body.classList.toggle("dark");
    p.classList.toggle("sun");
    let bool = document.body.classList.contains("dark");
    localStorage.setItem("dark", bool.toString());
}