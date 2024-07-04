const path = '../assets/products.json';
let products = [];

async function loadJSON() {
    try {
        const response = await fetch(path);
        if(!response.ok) {throw new Error('There was an issue with the network response.');}
        products = await response.json();
    }
    catch (error) {
        console.error('An error occured with the fetch method!');
        throw error;
    }
}
await loadJSON();

export function getProducts() {
    return products;
};