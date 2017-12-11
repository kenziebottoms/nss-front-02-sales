"use strict";


function activateDropdown() {
    console.log("activateDropdown");
    const viewer = require("./view");
    const model = require("./model");
    console.log("activateDropdown");
    let dropdown = document.getElementById("discounts");
    dropdown.addEventListener("click", function() {
        console.log("dropdown event listener");
        viewer.displayProducts(model.getProducts(), model.getCategories());
        viewer.discountProducts(model.getDiscountedPrices(this.value));
    });
}

module.exports = {activateDropdown};