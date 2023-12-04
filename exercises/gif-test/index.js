let categorySelect = document.getElementById('categorySelect');
let loadGifs = document.getElementById('loadGifs');

fetch(
  'https://api.giphy.com/v1/gifs/categories?api_key=8eHJcp4BuWNQ25hMAXNYT8yIzSDGJwvC'
)
  .then((response) => response.json())
  .then((data) => {
    for (let index = 0; index < data.subcategories.length; index++) {
      const category = data.subcategories[index];
      let opt = new Option(option);
      opt.innerText = category.name;
      opt.value = category.name;
      categorySelect.appendChild(opt);
    }
  });
