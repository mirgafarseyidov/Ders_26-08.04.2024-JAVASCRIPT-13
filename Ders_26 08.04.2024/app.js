const mallar = document.querySelector(".mallar");

let image = [];
let titles = [];
let prices = [];
let yoxla = 0;

const data = document.createElement("div");
data.classList.add("sekiller");
mallar.append(data);
const images = document.createElement("img");
data.append(images);
const title = document.createElement("p")
title.classList.add("title")
mallar.append(title)
const price = document.createElement('p')
price.classList.add('price')
mallar.append(price)


const btn1 = document.getElementById("right").addEventListener("click", goright);
const btn2 = document.getElementById("left").addEventListener("click", goback);




fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((items) => items.map((item) => (image.push(item.image), titles.push(item.title), prices.push(item.price), images.src = image[yoxla], title.textContent = titles[yoxla], price.textContent = prices[yoxla] + '$')));







function goright() {
  if (yoxla <= 18) { yoxla++; }
  images.src = image[yoxla];
  title.textContent = titles[yoxla]
  price.textContent = prices[yoxla] + '$'
}




function goback() {
  if (yoxla >= 1) { yoxla--; }
  images.src = image[yoxla];
  title.textContent = titles[yoxla]
  price.textContent = prices[yoxla] + '$'
}
