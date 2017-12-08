"use strict";

const events = require("./events");
const model = require("./model");

function populateDropdown(categories) {
    console.log("populateDropdown");
    let selectElement = document.getElementById("discounts");
    selectElement.innerHTML = "";
    categories.forEach(category => {
        let option = document.createElement("option");
        option.value = category.season_discount;
        option.innerText = category.season_discount;
        selectElement.appendChild(option);
    });
    events.activateDropdown();
}

function displayProducts() {
    console.log("displayProducts");
    let products = model.getProducts();
    let categories = model.getCategories();
    displayProducts(products, categories);
}
function displayProducts(products, categories) {
    console.log("displayProducts");
    let tbody = document.getElementById("product-tbody");
    const model = require("./model");
    tbody.innerHTML = "";

    products.forEach(product => {
        let tr = document.createElement("tr");
        tr.id = product.id;

        let nameTd = document.createElement("td");
        nameTd.innerText = product.name;
        tr.appendChild(nameTd);

        let priceTd = document.createElement("td");
        priceTd.innerText = `$${product.price}`;
        tr.appendChild(priceTd);

        let catTd = document.createElement("td");
        catTd.innerText = model.getCategoryName(product.category_id);
        tr.appendChild(catTd);

        tbody.appendChild(tr);
    });
}

function initPage() {
    console.log("initPage");
    model.fetchCategories("assets/json/categories.json");
}

module.exports = {displayProducts, initPage, populateDropdown};