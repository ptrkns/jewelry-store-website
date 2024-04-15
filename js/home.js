const path = '../assets/products.json';
const mainTitle = "New in store"
const mainDesc = "The new jewlery collection is now available!"
let products = [];
let mainImageIndex = 0;

function loadJSON() {
    fetch(path)
    .then((response) => {return response.json();})
    .then((data) => {
        products = data;
        setMainArticle(4, mainTitle, mainDesc);
    })
    .catch((error) => {console.error("Error with the fetch method: ", error);})
}
loadJSON();

function setMainArticle(index, title, desc) {
    document.getElementById('ma-img-1').src = products[index].image;
    document.getElementById('ma-title').textContent = title;
    document.getElementById('ma-description').textContent = desc;
    mainImageIndex = index;
}
