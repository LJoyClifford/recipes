let searchInputDom = document.querySelector("#search-input");
let apiKey = "2732988f21c44febb520f8872d9bddaa";
let favoriteList = [];
let favoriteAmountDom = document.querySelector("#favoriteAmount");

searchInputDom.addEventListener("keypress", function (e) {
    let ingridients = e.target.value;
    if (e.key === "Enter") {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingridients}&apiKey=${apiKey}`
      )
        .then((respond) => respond.json())
        .then((list) => renderRecipes(list.results));
    } 
    console.log("you pressed", e.key);
  });


  function renderRecipes(list) {
    let recipesListDom = document.querySelector("#recipes-list");
    recipesListDom.innerHTML = "";
    list.forEach((recipe) => {
      let recipeContainer = document.createElement("div");
      recipeContainer.classList.add("recipe");

      let title = document.createElement("div");
      title.classList.add("title");
      title.innerText = recipe.title;
      recipeContainer.appendChild(title);

      recipieContainer.addEventListener("mouseover", function () {
        title.innerText = "Open this recipe";
      });
      recipeContainer.addEventListener("mouseleave", function () {
        title.innerText = recipe.title;
      });

    let recipieImg = document.createElement("img");
    recipeImg.src = recipe.image;
    recipeContainer.appendChild(recipeImg);



