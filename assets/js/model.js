"use strict";

const viewer = require("./view");

let categories,
    products;

// happens once
function fetchProducts(filename) {
    console.log("fetchProducts");
    let request = new XMLHttpRequest();
    request.addEventListener("load", storeProducts);
    request.open("GET", filename, true);
    request.send();
}

// happens once; the first domino
function fetchCategories(filename) {
    console.log("fetchCategories");
    let request = new XMLHttpRequest();
    request.addEventListener("load", storeCategories);
    request.open("GET", filename, true);
    request.send();
}

// happens once
function storeCategories() {
    console.log("storeCategories");
    let data = JSON.parse(event.target.responseText);
    categories = data.categories;
    fetchProducts("assets/json/products.json");
}
// happens once
function storeProducts() {
    const viewer = require("./view");
    console.log("storeProducts");
    let data = JSON.parse(event.target.responseText);
    products = data.products;
    viewer.displayProducts(products, categories);
    viewer.populateDropdown(categories);
}

// getter
function getCategories() {
    return categories;
}
// getter
function getProducts() {
    return products;
}

// getter
function getCategoryName(id) {
    let matchingCats = categories.filter(category => category.id == id);
    return [...matchingCats][0].name;
}

function getProductsCategory(product) {
    let matchingCats = categories.filter(category => category.id == product.category_id);
    return [...matchingCats][0];
}

function getDiscountedPrices(season) {
    let prices = products.map(product => {
        let cat = getProductsCategory(product);
        let price = product.price;
        if (cat.season_discount == season) {
            price = product.price*0.85;
        }
        return price.toFixed(2);
    });
    return prices;
}

module.exports = {fetchCategories, getCategories, getCategoryName, getProducts, getDiscountedPrices};