const oy = document.querySelector(".oy")
const quyosh = document.querySelector(".quyosh")
const body = document.querySelector("body")
const title = document.querySelector(".title")
const apiLink =  "https://restcountries.com/v3.1/all"
const flags = document.querySelector(".flags")

const getData = async(link)=> {

    var req = await fetch(link)
    var data = await req.json()
    writeData(data);
    
}

getData(apiLink)

const writeData = (data)=>{

    data.forEach((item)=>{

        flags.innerHTML+= `
        <div class="flag">
                        <div class="flag-img">
                            <img src="${item.flags.png}" alt="">
                            <span class="more">More</span>
                        </div>
                        <div class="flag-info">
                            <h4>${item.name.common}</h4>

                            <span>
                                <h5>Population: <p>${item.population}</p></h5>
                                <h5>Region:   <p>${item.region}</p></h5>
                                <h5>Capital:  <p>${item.capital}</p></h5>
                            </span>
                        </div>
        `
    })


}

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
