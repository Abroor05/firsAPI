const oy = document.querySelector(".oy")
const quyosh = document.querySelector(".quyosh")
const body = document.querySelector("body")
const title = document.querySelector(".title")

window.addEventListener("DOMContentLoaded", () => {
    const rejim = localStorage.getItem("mode");
    if (rejim === "dark") {
        body.classList.add("dark");
        title.textContent = "Light mode";
    } else {
        body.classList.remove("dark");
        title.textContent = "Dark mode";
    }
});

function rejimniAlmashtir() {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        title.textContent = "Light mode";
        localStorage.setItem("mode", "dark");
    } else {
        title.textContent = "Dark mode";
        localStorage.setItem("mode", "light");
    }
}

oy.addEventListener("click", rejimniAlmashtir);
quyosh.addEventListener("click", rejimniAlmashtir);
