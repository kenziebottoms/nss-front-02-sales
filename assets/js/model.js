"use strict";

const viewer = require("./view");

let categories;

function fetchProducts(filename) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", viewer.displayProducts);
    request.open("GET", filename, true);
    request.send();
}

function fetchCategories(filename) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", storeCategories);
    request.open("GET", filename, true);
    request.send();
}

function storeCategories() {
    let data = JSON.parse(event.target.responseText);
    categories = data.categories;
    fetchProducts("assets/json/products.json");
}

function getCategories() {
    return categories;
}

function getCategoryName(id) {
    let matchingCat = categories.filter(category => category.id == id);
    return [...matchingCat][0].name;
}

module.exports = {fetchCategories, getCategories, getCategoryName};