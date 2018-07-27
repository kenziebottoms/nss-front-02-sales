# Seasonal Sales

![](https://img.shields.io/badge/data-static-lightgrey.svg)
![](https://img.shields.io/badge/template-none-lightgrey.svg)
![](https://img.shields.io/badge/js-jquery-blue.svg)
![](https://img.shields.io/badge/modularity-browserify-yellow.svg)
![](https://img.shields.io/badge/css_preprocessor-scss-ff69b4.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-working-brightgreen.svg)

## Run Locally

```
git clone git@github.com:kenziebottoms/nss-front-02-sales.git
cd nss-front-02-sales
npm install
grunt
hs -o
```
---

You work as a developer for a big box store.

- [Here](assets/json/products.json) is a JSON representation of a small sample of the products you sell.
- [Here](assets/json/categories.json) is a JSON representation of some of the departments in your stores.

## Requirements

1. [x] Build a web page that lists all of the products, the name of the department it's in, and the price.
1. [x] Put a `<select>` element at the top of the page that contains all possible values of the `season_discount` key in the categories file.
1. [x] As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.
   - [x] _Example_: When "spring" is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.
1. [x] The two JSON representations above should be in `products.json`, and `categories.json`. Load both files via XHRs and store the contents in two different JavaScript variables in your code.

# Resources

1. Use [JSON Lint](http://www.jsonlint.com) to validate your JSON documents.