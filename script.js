let data;
let url = '/cardProduct.json';
let response = await fetch(url);
console.log(response.ok);

if (response.ok) {
  data = await response.json();
  console.log(data);
} else {
  console.log("Ошибка HTTP: " + response.status);
}

let content = document.querySelector(".content");
console.log(content);


for (let prоduct of data) {
  console.log(prоduct.title);
  content.innerHTML += `
  <a href="#!" class="card">
  <img class="card__img" src="${prоduct.path}">
  <h3 class="card__title">"${prоduct.title}”</h3>
  </a>
  `;
 }