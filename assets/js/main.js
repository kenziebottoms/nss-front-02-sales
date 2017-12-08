"use strict";

const viewer = require("./view");

function fetchProducts(filename) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", viewer.displayProducts);
    request.open("GET", filename, true);
    request.send();
}

fetchProducts("assets/json/products.json");