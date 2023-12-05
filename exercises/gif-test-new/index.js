const categoryDropdown = document.getElementById('categoryDropdown');
const loadImage = document.getElementById('loadImage');

async function start() {
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/categories?api_key=8eHJcp4BuWNQ25hMAXNYT8yIzSDGJwvC'
  );
  const data = await response.json();
  data.data.forEach((category) => {
    createCategoryList(category);
  });
}

start();

function createCategoryList(category) {
  console.log(category);
  const opt = new Option(Option);
  opt.value = category.gif.embed_url;
  opt.innerHTML = category.name;
  categoryDropdown.appendChild(opt);
}

function loadGifs(gif) {
  let img;
  if (gif.value != 'select') {
    if (gif) {
      img = new Image(img);
      img.style = 'width: 480px; height: 270px';
      img.src = gif.value;
      loadImage.appendChild(img);
    }
  }
}
