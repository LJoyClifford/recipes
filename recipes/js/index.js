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
        .then((list) => renderRecipies(list.results));
    } 
    console.log("you pressed", e.key);
  });


  function renderRecipies(list) {
    let recipesListDom = document.querySelector("#recipes-list");
    recipesListDom.innerHTML = "";
    list.forEach((recipie) => {
      let recipieContainer = document.createElement("div");
      recipieContainer.classList.add("recipie");

      let title = document.createElement("div");
      title.classList.add("title");
      title.innerText = recipie.title;
      recipieContainer.appendChild(title);