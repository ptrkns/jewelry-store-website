import { getProducts } from "./productData.js";

const mainTitle = "New in store"
const mainDesc = "The new jewlery collection is now available!"
let mainImageIndex = 0;
let products = getProducts();

function setMainArticle(index, title, desc) {
    document.getElementById('ma-img-1').src = products[index].image;
    document.getElementById('ma-title').textContent = title;
    document.getElementById('ma-description').textContent = desc;
    mainImageIndex = index;
}

setMainArticle(4, mainTitle, mainDesc);