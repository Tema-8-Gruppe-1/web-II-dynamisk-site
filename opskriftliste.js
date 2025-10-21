console.log("Sitet er loadet");

const params = new URLSearchParams(window.location.search);
const tag = params.get("tag");

const opskriftliste_container = document.querySelector(".opskriftliste_container");
const url = `https://dummyjson.com/recipes?limit=20`; //Url til api'et

// document.querySelector("#filters").addEventListener("click", showFiltered);

// document.querySelector("#sorting").addEventListener("click", showSorted);

function getData(url) {
  //Henter data fra APIét og sender det videre til funktionen showRecipes
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showRecipes(data.recipes);
    });
}

getData(url); //Kalder funktionen getData

function showRecipes(recipes) {
  recipes.forEach((recipe) => {
    //Går igennem alle opskrifter,
    opskriftliste_container.innerHTML += ` <article> 
       <a href="opskrift.html?id=${recipe.id}">
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
