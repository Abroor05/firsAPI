const oy = document.querySelector(".oy");
const quyosh = document.querySelector(".quyosh");
const body = document.querySelector("body");
const darkMod = document.querySelector(".darkMod")
const title = document.querySelector(".title");
const apiLink = "https://restcountries.com/v3.1/all";
const flags = document.querySelector(".flags");
const search = document.querySelector(".search");
const select = document.querySelector("select");

const getData = async (link) => {
  var req = await fetch(link);
  var data = await req.json();
  writeData(data);
};

getData(apiLink);

const writeData = (data) => {
  data.forEach((item) => {
    flags.innerHTML += `
        <div class="flag">
                        <div class="flag-img">
                            <img src="${item.flags.png}" alt="">
                            <span class="more">More</span>
                        </div>
                        <div class="flag-info">
                            <h4 class ="countryName">${item.name.common}</h4>

                            <span>
                                <h5>Population: <p>${item.population}</p></h5>
                                <h5>Region:   <p class = "regionEl">${item.region}</p></h5>
                                <h5>Capital:  <p>${item.capital}</p></h5>
                            </span>
                        </div>
        `;
  });
};

darkMod.addEventListener("DOMContentLoaded", () => {
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

darkMod.addEventListener("click", rejimniAlmashtir);
oy.addEventListener("click", rejimniAlmashtir);
quyosh.addEventListener("click", rejimniAlmashtir);

search.addEventListener("input", () => {
  var searchTitle = search.value.toLocaleLowerCase();
  const allCards = document.querySelectorAll(".flag");

  allCards.forEach((item) => {
    var cartTitle = item
      .querySelector(".countryName")
      .textContent.toLocaleLowerCase();

    if (!cartTitle.startsWith(searchTitle)) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
});


select.addEventListener("change", ()=>{
  var searchTitle = select.value.toLocaleLowerCase();
  const allCards = document.querySelectorAll(".flag");

  allCards.forEach((item) => {

    if(searchTitle != "all"){
      var cartTitle = item
      .querySelector(".regionEl")
      .textContent.toLocaleLowerCase();

    if (!cartTitle.startsWith(searchTitle)) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
    } else {
      item.classList.remove("hidden")
    }
    
  });
})