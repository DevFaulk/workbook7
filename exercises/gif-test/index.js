// let categorySelect = document.getElementById('categorySelect');
// let loadGifs = document.getElementById('loadGifs');
// site: https://developers.giphy.com/dashboard/

fetch(
  'https://api.giphy.com/v1/gifs/categories?api_key=8eHJcp4BuWNQ25hMAXNYT8yIzSDGJwvC'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
