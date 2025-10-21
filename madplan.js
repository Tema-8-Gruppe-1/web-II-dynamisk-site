console.log("Sitet er loadet");

// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");

// const madplan_container = document.querySelector(".madplan_container");
/*******TIRSDAG********/
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

/*******ONSDAG********/
const ons = `https://dummyjson.com/recipes/4`; //Url til api'et
const ons_container = document.querySelector("#ons_container");

function getDataOns(ons) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(ons)
    .then((res) => res.json())
    .then((data) => {
      showRecipeOns(data);
    });
}

getDataOns(ons); //Kalder funktionen getData

function showRecipeOns(recipe) {
  //Går igennem alle produkter,
  ons_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}

/*******TORSDAG********/
const tor = `https://dummyjson.com/recipes/5`; //Url til api'et
const tor_container = document.querySelector("#tor_container");

function getDataTor(tor) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(tor)
    .then((res) => res.json())
    .then((data) => {
      showRecipeTor(data);
    });
}

getDataTor(tor); //Kalder funktionen getData

function showRecipeTor(recipe) {
  //Går igennem alle produkter,
  tor_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}

/*******FREDAG********/
const fre = `https://dummyjson.com/recipes/6`; //Url til api'et
const fre_container = document.querySelector("#fre_container");

function getDataFre(fre) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(fre)
    .then((res) => res.json())
    .then((data) => {
      showRecipeFre(data);
    });
}

getDataFre(fre); //Kalder funktionen getData

function showRecipeFre(recipe) {
  //Går igennem alle produkter,
  fre_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}

/*******Lørdag********/
const lor = `https://dummyjson.com/recipes/7`; //Url til api'et
const lor_container = document.querySelector("#lor_container");

function getDataLor(lor) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(lor)
    .then((res) => res.json())
    .then((data) => {
      showRecipeLor(data);
    });
}

getDataLor(lor); //Kalder funktionen getData

function showRecipeLor(recipe) {
  //Går igennem alle produkter,
  lor_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}

/*******Søndag********/
const son = `https://dummyjson.com/recipes/8`; //Url til api'et
const son_container = document.querySelector("#son_container");

function getDataSon(son) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(son)
    .then((res) => res.json())
    .then((data) => {
      showRecipeSon(data);
    });
}

getDataSon(son); //Kalder funktionen getData

function showRecipeSon(recipe) {
  //Går igennem alle produkter,
  son_container.innerHTML += ` <article>
         <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
      <p class="articleName">${recipe.name}</p>
  `;
}
