import { getProducts } from "./productData.js";
import { headerInit } from "./header.js";
import { footerInit } from "./footer.js";

/* Header, footer */

headerInit();
footerInit();

/* Body */

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
let products = getProducts();
const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get('id');

const product = products.find(p => p.id === productID);
const imageContainer = document.getElementById('image-container');
const dataContainer = document.getElementById('data-container');

const image = document.createElement('img');
image.setAttribute('id', 'product-image');
image.setAttribute('src', product.image);

const name = document.createElement('h2');
name.setAttribute('id', 'product-name');
name.textContent = product.name;

const desc = document.createElement('p');
desc.setAttribute('id', 'product-description');
desc.textContent = loremIpsum;

const price = document.createElement('p');
price.setAttribute('id', 'product-price');
price.textContent = 'Price: $' + product.price;

const year = document.createElement('p');
year.setAttribute('id', 'product-year');
year.textContent = 'Year of release: ' + product.year;

imageContainer.appendChild(image);
dataContainer.appendChild(name);
dataContainer.appendChild(desc);
dataContainer.appendChild(price);
dataContainer.appendChild(year);