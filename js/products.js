const path = '../assets/products.json';
let products = [];

function loadJSON() {
    fetch(path)
    .then((response) => {return response.json();})
    .then((data) => {
        products = data;
        // Create cards
        renderCards('earring');
        renderCards('ring');
        renderCards('necklace');
        renderCards('bracelet');
    })
    .catch((error) => {console.error("Error with the fetch method: ", error);})
}
loadJSON();

function renderCards(type) {
    const cardContainer = document.getElementById(`${type}-container`);
    const filteredProducts = products.filter(p => p.type === type);

    filteredProducts.forEach((p) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const cardImage = document.createElement('img');
        cardImage.id = 'card-image';
        cardImage.src = p.image;

        /* First row on card */

        const firstRow = document.createElement('div');
        firstRow.id = 'card-first-row';

        const cardText = document.createElement('p');
        cardText.id = 'card-text';
        cardText.textContent = p.name;

        const cardBadge = document.createElement('p');
        if(p.year < '2023') {
            cardBadge.id = 'card-badge-sale';
            cardBadge.textContent = "On Sale";
        } else if (p.year === '2024') {
            cardBadge.id = 'card-badge-new';
            cardBadge.textContent = "New";
        } else {
            cardBadge.id = 'card-badge';
            cardBadge.textContent = '';
        }

        /* Second row on card */

        const secondRow = document.createElement('div');
        secondRow.id = 'card-second-row';

        const cardPrice = document.createElement('p');
        cardPrice.id = 'card-price';
        cardPrice.textContent = '$' + p.price;

        const cardDiscount = document.createElement('p');
        cardDiscount.id = 'card-discount';
        if(p.year < 2023) {
            cardDiscount.textContent = '$' + p.price * 0.75;
            cardPrice.id = 'card-price-before';
        }
        else {
            cardDiscount.textContent = '';
        }
        /* Appending */

        firstRow.appendChild(cardText);
        firstRow.appendChild(cardBadge);
        secondRow.appendChild(cardPrice);
        secondRow.appendChild(cardDiscount);

        productCard.appendChild(cardImage);
        productCard.appendChild(firstRow);
        productCard.appendChild(secondRow);

        cardContainer.appendChild(productCard);
    });
}