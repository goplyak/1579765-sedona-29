const searchBtn = document.querySelector(".search-button"),
      searchBox = document.querySelector(".form-relative__item");
searchBox.classList.add('search-hide-form');
searchBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchBox.classList.toggle("search-hide-form");
});