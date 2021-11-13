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

      recipeContainer.addEventListener("mouseover", function () {
        title.innerText = "Open this recipe";
      });
      recipeContainer.addEventListener("mouseleave", function () {
        title.innerText = recipe.title;
      });

    let recipeImg = document.createElement("img");
    recipeImg.src = recipe.image;
    recipeContainer.appendChild(recipeImg);

    let likeBtn = document.createElement("button");
    likeBtn.innerHTML = "&#10084;";
    likeBtn.addEventListener("mouseover", function (e) {
      e.stopPropagation();
      if (recipeContainer.classList.contains("liked")) {
        title.innerText = "Remove this recipe to favorites";
      } else {
        title.innerText = "Add this recipe to favorites";
      }
    });

    likeBtn.addEventListener("mouseleave", function () {
      title.innerText = recipe.title;
    });
    likeBtn.onclick = function (e) {
      e.stopPropagation();

    recipeContainer.classList.toggle("liked");
      if (recipeContainer.classList.contains("liked")) {
        favoriteList.push(recipe);
        title.innerText = "Remove this recipe to favorites";
      } else {
        let recipeIndexToRemove = favoriteList.findIndex(function (rec) {
          return rec.id == recipe.id;
        });
        favoriteList.splice(recipeIndexToRemove, 1);
        title.innerText = "Add this recipe to favorites";
      }
      favoriteAmountDom.innerText = favoriteList.length;
    };





