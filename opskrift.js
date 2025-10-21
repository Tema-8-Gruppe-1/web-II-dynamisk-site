console.log("Sitet er loadet");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const opskrift_container = document.querySelector(".opskrift_container");
const url = `https://dummyjson.com/recipes/${id}`; //Url til api'et

function getData(url) {
  //Henter data fra APIét og sender det videre til funktionen showRecipe
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showRecipe(data);
    });
}

getData(url); //Kalder funktionen getData

function showRecipe(recipe) {
  //Går igennem alle produkter,
  opskrift_container.innerHTML += ` <article> 
       <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="">
    <p class="articleName">${recipe.name}</p>
    <p class="articleInstruction">Instruction: ${recipe.instructions}</p></a>
    <p class="articleRating">Rating:${recipe.rating} /5</p>
    <p class="articleReviewCount">Review Count:${recipe.reviewCount}</p>
    </article>
`;
}
