console.log("Sitet er loadet");

const params = new URLSearchParams(window.location.search);
const tag = params.get("tag");
document.querySelector("#filters").addEventListener("click", showFiltered);

function showFiltered(event) {
  //console.log(event.target);
  const land = event.target.dataset.land;
  if (land == "All") {
    currentDataSet = allData;
  } else {
    const udsnit = allData.filter((recipe) => recipe.cuisine == land);
    currentDataSet = udsnit;
  }
  showRecipes(currentDataSet);
}

let allData, currentDataSet;

const opskriftliste_container = document.querySelector(".opskriftliste_container");
const url = `https://dummyjson.com/recipes?limit=20`; //Url til api'et

// document.querySelector("#filters").addEventListener("click", showFiltered);

// document.querySelector("#sorting").addEventListener("click", showSorted);

function getData(url) {
  //Henter data fra APIét og sender det videre til funktionen showRecipes
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = currentDataSet = data.recipes;
      showRecipes(allData);
    });
}

getData(url); //Kalder funktionen getData

function showRecipes(recipes) {
  opskriftliste_container.innerHTML = "";
  recipes.forEach((recipe) => {
    //Går igennem alle opskrifter,
    opskriftliste_container.innerHTML += ` <article> 
       <a href="opskrifter.html?id=${recipe.id}">
       <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
    <p>${recipe.name}</p>
    <p>€ ${recipe.rating}</p></a>
    </article>
`;
  });
}

// function showFiltered(event) {
//   const tag = event.target.dataset.tag;
//   if (tag === "All") {
//     currentDataSet = allData;
//   } else {
//     const udsnit = allData.filter((product) => product.gender == gender);

//     currentDataSet = udsnit;
//   }

//   showProducts(currentDataSet);
// }
