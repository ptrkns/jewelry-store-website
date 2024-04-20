import { getProducts } from "./productData.js";
import { headerInit } from "./header.js";
import { footerInit } from "./footer.js";

const products = getProducts();
const buttonNew = document.getElementById('button-new');
const buttonSale = document.getElementById('button-sale');

/* Header, footer */

headerInit();
footerInit();

/* Buttons */

buttonNew.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = './products.html';
});

buttonSale.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = './products.html';
});

/* Main image */

let mainCounter = 0;

function cycleMainImage() {
    const filteredProducts = products.filter(p => p.year === '2024');
    var length = filteredProducts.length;
    var delayInSeconds = 5;
    var imageContainer = document.getElementById('ma-img-1');
    var mainImage = () => {
        imageContainer.style.opacity = '0';
        setTimeout(() => {
            imageContainer.setAttribute('src', filteredProducts[mainCounter].image);
            imageContainer.style.opacity = '1';
        }, 400);

        mainCounter = (mainCounter + 1) % length;
    }
    mainImage();
    setInterval(mainImage, delayInSeconds * 1000);
}
cycleMainImage();

/* Sub article 1 */

let subCounter = 0;

function setSubImages() {
    const filteredProducts = products.filter(p => p.year < '2023');
    var length = filteredProducts.length;
    var delayInSeconds = 5;
    var subArticleImage = document.getElementById('sub-article-image');

    var subImage = () => {
        subArticleImage.style.opacity = '0';
        setTimeout(() => {
            subArticleImage.setAttribute('src', filteredProducts[subCounter].image);
            subArticleImage.style.opacity = '1';
        }, 400);

        subCounter = (subCounter + 1) % length;
    }
    subImage();
    setInterval(subImage, delayInSeconds * 1000);
}
setSubImages();
