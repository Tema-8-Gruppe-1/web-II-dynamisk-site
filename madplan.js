console.log("Sitet er loadet");

// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");

// const madplan_container = document.querySelector(".madplan_container");
const man = `https://dummyjson.com/recipes/1`; //Url til api'et

const man_container = document.querySelector("#man_container");

function getDataMan(man) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(man)
    .then((res) => res.json())
    .then((data) => {
      showRecipeMan(data);
    });
}
getDataMan(man); //Kalder funktionen getData

function showRecipeMan(recipe) {
  //Går igennem alle produkter,
  man_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}

/*******TIRSDAG********/
const tir = `https://dummyjson.com/recipes/2`; //Url til api'et
const tir_container = document.querySelector("#tir_container");

function getDataTir(tir) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(tir)
    .then((res) => res.json())
    .then((data) => {
      showRecipeTir(data);
    });
}

getDataTir(tir); //Kalder funktionen getData

function showRecipeTir(recipe) {
  //Går igennem alle produkter,
  tir_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}
