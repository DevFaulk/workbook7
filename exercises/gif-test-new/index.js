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
    console.log(category)
  const opt = new Option(Option);
  opt.value = category.gif.url;
  opt.innerHTML = category.name;
  categoryDropdown.appendChild(opt);
}

function loadGifs(gif) {
  if (gif.value != 'select') {
    if (gif) {
      let img = new Image(Image);
      img.style = 'width: 200px; height: 100px';
      img.src = gif.value;
      loadImage.appendChild(img);
    }
  }
}
