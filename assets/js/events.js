"use strict";


function activateDropdown() {
    console.log("activateDropdown");
    const viewer = require("./view");
    const model = require("./model");
    console.log("activateDropdown");
    let dropdown = document.getElementById("discounts");
    dropdown.addEventListener("click", function() {
        console.log("dropdown event listener");
        console.log(model.getProducts()[0].price);
        console.log(model.getDiscountedProducts(dropdown.value)[0].price);
        console.log(model.getProducts()[0].price);
        viewer.displayProducts(model.getDiscountedProducts(dropdown.value), model.getCategories());
    });
}

module.exports = {activateDropdown};