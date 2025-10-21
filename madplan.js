console.log("Sitet er loadet");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// const madplan_container = document.querySelector(".madplan_container");
const man = `https://dummyjson.com/recipes/1`; //Url til api'et
const tir = `https://dummyjson.com/recipes/2`; //Url til api'et
const man_container = document.querySelector(".man_container");
const tir_container = document.querySelector(".tir_container");

function getData(man) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(man)
    .then((res) => res.json())
    .then((data) => {
      showRecipe(data);
    });
}
getData(man); //Kalder funktionen getData

function showRecipe(recipe) {
  //Går igennem alle produkter,
  man_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}

function showRecipe(recipe) {
  //Går igennem alle produkter,
  tir_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}
function getData(tir) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(tir)
    .then((res) => res.json())
    .then((data) => {
      showRecipe(data);
    });
}

getData(tir); //Kalder funktionen getData
