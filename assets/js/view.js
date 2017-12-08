"use strict";

function populateDropdown(categories) {
    let selectElement = document.getElementById("discounts");
    categories.forEach(category => {
        let option = document.createElement("option");
        option.value = category.season_discount;
        option.innerText = category.season_discount;
        selectElement.appendChild(option);
    });
}

function displayProducts(products) {
    const model = require("./model");
    let categories = model.getCategories();

    let tbody = document.getElementById("product-tbody");

    [...products].forEach(product => {
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
    const model = require("./model");
    model.fetchCategories("assets/json/categories.json");
}

module.exports = {displayProducts, initPage};