"use strict";

const viewer = require("./view");

let categories,
    products;

// happens once
function fetchProducts(filename) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", viewer.displayProducts);
    request.open("GET", filename, true);
    request.send();
}

// happens once; the first domino
function fetchCategories(filename) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", storeCategories);
    request.open("GET", filename, true);
    request.send();
}

// happens once
function storeCategories() {
    let data = JSON.parse(event.target.responseText);
    categories = data.categories;
    fetchProducts("assets/json/products.json");
}
// happens once
function storeProducts() {
    let data = JSON.parse(event.target.responseText);
    products = data.products;
    displayProducts(products);
    populateDropdown(categories);   
}

// getter
function getCategories() {
    return categories;
}

// getter
function getCategoryName(id) {
    let matchingCat = categories.filter(category => category.id == id);
    return [...matchingCat][0].name;
}

module.exports = {fetchCategories, getCategories, getCategoryName};