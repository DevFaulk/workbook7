// dropdown
const userDropdown = document.getElementById('userDropdown');
// table body
const tableBody = document.getElementById('tableBody');

function loadDropdown(data) {
  for (const user of data) {
    var option = new Option(option);
    option.value = user.name;
    option.innerText = user.name;
    userDropdown.appendChild(option);
  }
}

function displayTable(user) {
  tableBody.innerHTML = '';
  let row = tableBody.insertRow();
  let nameCell = row.insertCell();
  nameCell.innerText = user.name;
  let usernameCell = row.insertCell();
  usernameCell.innerText = user.username;
  let emailCell = row.insertCell();
  emailCell.innerText = user.email;
  if (user.address) {
    let addressCell = row.insertCell();
    if (user.address.suite) {
      addressCell.innerText = `${user.address.city} ${user.address.street} ${user.address.suite}`;
    } else
      addressCell.innerText = `${user.address.city} ${user.address.street}`;
  }
  let phoneCell = row.insertCell();
  phoneCell.innerText = user.phone;
  let websiteCell = row.insertCell();
  let link = document.createElement('a');
  link.href = user.website;
  link.innerText = user.website;
  websiteCell.appendChild(link);
}

window.onload = async function () {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  loadDropdown(data);
};

userDropdown.onchange = async function () {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  for (const user of data) {
    if (user.name == userDropdown.value) {
      displayTable(user);
    }
  }
};
