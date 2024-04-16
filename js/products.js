import { getProducts } from "./productData.js";
let products = getProducts();

function renderCards(type) {
    const cardContainer = document.getElementById(`${type}-container`);
    const filteredProducts = products.filter(p => p.type === type);

    filteredProducts.forEach((p) => {
        const anchor = document.createElement('a');
        anchor.classList.add('product-card');
        anchor.setAttribute('href', 'productDetail.html');

        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = anchor.href + `?id=${p.id}`;
        });

        const cardImage = document.createElement('img');
        cardImage.setAttribute('id', 'card-image');
        cardImage.setAttribute('src', p.image);

        /* First row on card */

        const firstRow = document.createElement('div');
        firstRow.setAttribute('id', 'card-first-row');

        const cardText = document.createElement('p');
        cardText.setAttribute('id', 'card-text');
        cardText.textContent = p.name;

        const cardBadge = document.createElement('p');
        if(p.year < '2023') {
            cardBadge.setAttribute('id', 'card-badge-sale');
            cardBadge.textContent = "On Sale";
        } else if (p.year === '2024') {
            cardBadge.setAttribute('id', 'card-badge-new');
            cardBadge.textContent = "New";
        } else {
            cardBadge.setAttribute('id', 'card-badge');
            cardBadge.textContent = '';
        }

        /* Second row on card */

        const secondRow = document.createElement('div');
        secondRow.setAttribute('id', 'card-second-row');

        const cardPrice = document.createElement('p');
        cardPrice.setAttribute('id', 'card-price');
        cardPrice.textContent = '$' + p.price;

        const cardDiscount = document.createElement('p');
        cardDiscount.setAttribute('id', 'card-discount');
        if(p.year < 2023) {
            cardDiscount.textContent = '$' + p.price * 0.75;
            cardPrice.setAttribute('id', 'card-price-before');
        }
        else {
            cardDiscount.textContent = '';
        }

        /* Appending */

        firstRow.appendChild(cardText);
        firstRow.appendChild(cardBadge);
        secondRow.appendChild(cardPrice);
        secondRow.appendChild(cardDiscount);

        anchor.appendChild(cardImage);
        anchor.appendChild(firstRow);
        anchor.appendChild(secondRow);

        cardContainer.appendChild(anchor);
    });
}

renderCards('earring');
renderCards('ring');
renderCards('necklace');
renderCards('bracelet');