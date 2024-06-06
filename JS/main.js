let icon = document.getElementById('icon');
let button = document.getElementById('theme-toggle');
let body = document.body;
let isDark = false;

button.addEventListener('click', () => {
  if (isDark) {
    icon.className = 'fa fa-moon';
    body.dataset.theme = 'light';
    isDark = false;
  } else {
    icon.className = 'fa fa-sun';
    body.dataset.theme = 'dark';
    isDark = true;
  }
});

let unit = document.querySelector('#unit-select');
let dozen = document.querySelector('#dozen-select');
let hundred = document.querySelector('#hundred-select');
let thousand = document.querySelector('#thousand-select');
let ten_thousand = document.querySelector('#ten-thousand-select');

let produit = document.querySelector('#produit')
produit.innerHTML = "hehe boi"

function row_modify() {
  produit.innerHTML = "hehe boi"
}

elements.forEach((item) => {
  item.addEventListener('onChange', row_modify)
});