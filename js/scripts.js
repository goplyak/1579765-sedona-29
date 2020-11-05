const searchBtn = document.querySelector(".search-button"),
      searchBox = document.querySelector(".form-relative__item"),
      searchForm = document.querySelector(".search-form__form"),
      inputIn = document.querySelector("#date-in"),
      inputOut = document.querySelector("#date-out");

//add class hide to form
searchBox.classList.add("search-hide-form");

// open or close form
searchBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchBox.classList.toggle("search-hide-form");
});

// validate form
searchForm.addEventListener("submit", function (evt) {
  if(!inputIn.value || !inputOut.value){
    evt.preventDefault();
    searchBox.classList.add("error-form");
  }
  setTimeout(function () {
    if (searchBox.classList.contains("error-form") ){
      searchBox.classList.remove("error-form");
    }
  },1000);
});