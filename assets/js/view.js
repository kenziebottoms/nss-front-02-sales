"use strict";

function displayProducts() {
    let data = JSON.parse(event.target.responseText);
    let products = data.products;
    let tbody = document.getElementById("product-tbody");
    console.log(products);
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
        catTd.innerText = product.category_id;
        tr.appendChild(catTd);

        tbody.appendChild(tr);
    });
}

module.exports = {displayProducts};